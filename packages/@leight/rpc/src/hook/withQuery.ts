"use client";

import {z}                    from "@leight/utils";
import {useQuery}             from "@tanstack/react-query";
import {type IQueryOptions}   from "../api/IQueryOptions";
import {IWithQuery}           from "../api/IWithQuery";
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
        useQuery: ({
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
