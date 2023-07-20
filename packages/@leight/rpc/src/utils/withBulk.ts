import {
    generateId,
    withTimeout,
    z
}                                  from "@leight/utils";
import axios, {type AxiosResponse} from "axios";
import {type IBulkRef}             from "../api/IBulkRef";
import {type IErrorResponse}       from "../schema/ErrorResponseSchema";
import {type IRequestSchema}       from "../schema/RequestSchema";
import {type IResponseSchema}      from "../schema/ResponseSchema";
import {
    type IRpcBulkResponse,
    RpcBulkResponseSchema
}                                  from "../schema/RpcBulkResponseSchema";
import {type IRpcStoreProps}       from "../store/RpcStore";
import {isData}                    from "./isData";
import {isError}                   from "./isError";

export interface IWithBulkProps<TRequestSchema extends IRequestSchema, TResponseSchema extends IResponseSchema> {
    schema?: TResponseSchema;
    store: IRpcStoreProps["StoreProps"];
    service: string;
    request: z.infer<TRequestSchema>;
}

export const withBulk = async <TRequestSchema extends IRequestSchema, TResponseSchema extends IResponseSchema>(
    {
        schema,
        store: {
                   requestRef,
                   bulkRef,
                   bulkTimerRef,
                   commit,
               },
        service,
        request: data,
    }: IWithBulkProps<TRequestSchema, TResponseSchema>) => new Promise<z.infer<TResponseSchema>>((resolve, reject) => {
    const id = generateId();
    requestRef.current.bulk[id] = {
        service,
        data,
    };
    bulkRef.current[id] = {
        schema,
        reject,
        resolve,
    };
    const $bulk = {...requestRef.current};
    withTimeout({
        timerRef: bulkTimerRef,
        callback: () => axios
            .post<IRpcBulkResponse, AxiosResponse<IRpcBulkResponse>, IRpcBulkResponse>("/rpc", $bulk)
            .then(({data}) => {
                const {bulk} = RpcBulkResponseSchema.parse(data);
                /**
                 * Iterate through requests we sent
                 */
                for (const k of Object.keys($bulk.bulk)) {
                    /**
                     * We're sure there is bulkRef as it's created together, check presence of data and
                     * resolve/reject the given promise.
                     */
                    const {
                        schema,
                        reject,
                        resolve
                    } = bulkRef.current[k] as IBulkRef;
                    delete bulkRef.current[k];
                    try {
                        const data = bulk?.[k];
                        if (isData(data)) {
                            resolve(schema?.parse(data.data) ?? data.data);
                        } else if (isError(data)) {
                            reject(data);
                        } else {
                            reject(new Error(`Missing response for [${k}].`));
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
                }
            })
            .catch(e => {
                for (const k of Object.keys($bulk.bulk)) {
                    (bulkRef.current[k] as IBulkRef).reject(e);
                    delete bulkRef.current[k];
                }
            })
            .finally(() => {
                commit();
            }),
    });
});
