"use client";

import {z}                     from "@leight/utils";
import {
    type MutationKey,
    useMutation
}                              from "@tanstack/react-query";
import {type IMutationOptions} from "../api/IMutationOptions";
import {type IWithMutation}    from "../api/IWithMutation";
import {type IRequestSchema}   from "../schema/RequestSchema";
import {type IResponseSchema}  from "../schema/ResponseSchema";
import {RpcStore}              from "../store/RpcStore";
import {withBulk}              from "../utils/withBulk";

export interface IWithMutationProps<TRequestSchema extends IRequestSchema, TResponseSchema extends IResponseSchema> {
    schema: {
        request: TRequestSchema,
        response: TResponseSchema,
    },
    service: string;
    key?: MutationKey;
}

/**
 * Creates useMutation hook (basically same as the one in React Query).
 */
export const withMutation = <TRequestSchema extends IRequestSchema, TResponseSchema extends IResponseSchema>(
    {
        schema: {
                    request:  requestSchema,
                    response: responseSchema,
                },
        service,
        key,
    }: IWithMutationProps<TRequestSchema, TResponseSchema>): IWithMutation<TRequestSchema, TResponseSchema> => {
    const mutationKey = (key || [service]);
    return {
        key: mutationKey as string[],
        service,
        schema:      {
            request:  requestSchema,
            response: responseSchema,
        },
        useMutation: ({
                          mutationKey: $mutationKey,
                          ...          options
                      }: IMutationOptions<z.infer<TRequestSchema>, z.infer<TResponseSchema>> = {}) => {
            const store = RpcStore.use();
            return useMutation({
                mutationKey: mutationKey.concat($mutationKey || []),
                mutationFn:  async request => withBulk<TRequestSchema, TResponseSchema>({
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
