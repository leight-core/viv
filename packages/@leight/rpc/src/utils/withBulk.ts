import {
    generateId,
    withTimeout,
    z
}                                  from "@leight/utils";
import axios, {type AxiosResponse} from "axios";
import {type IErrorResponse}       from "../schema/ErrorResponseSchema";
import {type IRequestSchema}       from "../schema/RequestSchema";
import {type IResponseSchema}      from "../schema/ResponseSchema";
import {type IRpcBulkRequest}      from "../schema/RpcBulkRequestSchema";
import {
    type IRpcBulkResponse,
    RpcBulkResponseSchema
}                                  from "../schema/RpcBulkResponseSchema";
import {type IRpcRequest}          from "../schema/RpcRequestSchema";
import {type IRpcStoreProps}       from "../store/RpcStore";
import {isData}                    from "./isData";
import {isError}                   from "./isError";

export interface IWithBulkProps<TRequestSchema extends IRequestSchema, TResponseSchema extends IResponseSchema> {
    schema?: TResponseSchema;
    store: IRpcStoreProps["StoreProps"];
    service: string;
    request: z.infer<TRequestSchema>;
    /**
     * Timeout in secs before current bulk is rejected
     */
    timeout?: number;
}

export const withBulk = async <TRequestSchema extends IRequestSchema, TResponseSchema extends IResponseSchema>(
    {
        schema,
        store: {
                   bulkRef,
                   bulkTimerRef,
                   timeoutRef,
                   url,
               },
        service,
        request: data,
        timeout = 10,
    }: IWithBulkProps<TRequestSchema, TResponseSchema>) => new Promise<z.infer<TResponseSchema>>((resolve, reject) => {

    bulkRef.current[generateId()] = {
        schema,
        reject,
        resolve,
        request: {
            service,
            data,
        },
    };

    const guardianOfGalaxy = () => {
        const entries = Object.entries({...bulkRef.current});
        entries.length && console.warn("Bulk timeout", bulkRef.current);
        entries.forEach(([id, {reject}]) => {
            reject({
                error: {
                    message: "Bulk timeout reached.",
                    code:    408,
                },
            } satisfies IErrorResponse);
            delete bulkRef.current[id];
        });
    };

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(guardianOfGalaxy, timeout * 1000);

    withTimeout({
        timerRef: bulkTimerRef,
        callback: () => axios
            .post<IRpcBulkResponse, AxiosResponse<IRpcBulkResponse>, IRpcBulkRequest>(url, {
                bulk: Object.entries(bulkRef.current).reduce((bulk, [id, {request}]) => {
                    bulk[id] = request;
                    return bulk;
                }, {} as Record<string, IRpcRequest<any>>),
            }, {
                baseURL: "",
            })
            .then(({data}) => {
                const {bulk} = RpcBulkResponseSchema.parse(data);
                Object.entries({...bulkRef.current}).forEach(([id, {
                    schema,
                    reject,
                    resolve
                }]) => {
                    /**
                     * We're sure there is bulkRef as it's created together, check presence of data and
                     * resolve/reject the given promise.
                     */
                    delete bulkRef.current[id];
                    try {
                        const data = bulk?.[id];
                        if (data === null || isData(data)) {
                            resolve(schema?.parse(data?.data) || data?.data || null);
                        } else if (isError(data)) {
                            reject(data);
                        }
                    } catch (e) {
                        console.error(e);
                        reject({
                            error: {
                                message: "General unhandled (client-side) error",
                                code:    500,
                            },
                        } satisfies IErrorResponse);
                    }
                });
            })
            .catch(e => {
                console.error(e);
                Object.entries({...bulkRef.current}).forEach(([id, {reject}]) => {
                    reject(e);
                    delete bulkRef.current[id];
                });
            })
            .finally(() => {
                /**
                 * Who remains will be in the timeout queue again; if nothing gets processed, we'll get proper timeouts.
                 *
                 * At least I hope.
                 */
                setTimeout(guardianOfGalaxy, timeout * 1000);
            }),
    });
});
