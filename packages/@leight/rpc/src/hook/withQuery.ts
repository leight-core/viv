"use client";

import {IQueryOptions}        from "@leight/query";
import {type z}               from "@leight/utils";
import {
    useQuery,
    useQueryClient
}                             from "@tanstack/react-query";
import {type IInvalidator}    from "../api/IInvalidator";
import {type IWithQuery}      from "../api/IWithQuery";
import {type IRequestSchema}  from "../schema/RequestSchema";
import {type IResponseSchema} from "../schema/ResponseSchema";
import {RpcStore}             from "../store/RpcStore";
import {withBulk}             from "../utils/withBulk";

export interface IWithQueryProps<TRequestSchema extends IRequestSchema, TResponseSchema extends IResponseSchema> {
    schema: {
        request: TRequestSchema,
        response: TResponseSchema,
    },
    service: string;
    key?: string[];
    invalidator?: IInvalidator.Invalidator;
}

/**
 * Creates useQuery hook (basically same as the one in React Query).
 */
export const withQuery = <TRequestSchema extends IRequestSchema, TResponseSchema extends IResponseSchema>(
    {
        schema: {
                    request:  requestSchema,
                    response: responseSchema,
                },
        service,
        invalidator,
        key,
    }: IWithQueryProps<TRequestSchema, TResponseSchema>): IWithQuery<TRequestSchema, TResponseSchema> => {
    const queryKey = key || [service];
    return {
        key:    queryKey as string[],
        service,
        schema: {
            request:  requestSchema,
            response: responseSchema,
        },
        useInvalidator() {
            const queryClient = useQueryClient();
            return invalidator ? (() => {
                invalidator({
                    queryClient,
                });
            }) : (() => {
                queryClient.invalidateQueries({
                    queryKey,
                });
            });
        },
        useQuery:   options => {
            return useQuery({
                ...options,
                queryKey,
                queryFn: async () => {
                    console.error("Not implemented yet: useQuery with key", queryKey);
                    return [];
                },
            });
        },
        useQueryEx: ({
                         options: {
                                      queryKey: $queryKey,
                                      ...       options
                                  } = {queryKey},
                         request,
                     }: IQueryOptions<z.infer<TResponseSchema>, z.infer<TRequestSchema>>) => {
            const store = RpcStore.use();
            return useQuery({
                queryKey: queryKey.concat($queryKey || []).concat([request].filter(Boolean)),
                queryFn:  async () => withBulk<TRequestSchema, TResponseSchema>({
                    service,
                    request: requestSchema?.parse(request) ?? request,
                    store,
                    schema:  responseSchema,
                }),
                ...options,
            });
        },
    };
};
