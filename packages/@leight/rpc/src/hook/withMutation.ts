"use client";

import {z}                     from "@leight/utils";
import {
    type MutationKey,
    useMutation
}                              from "@tanstack/react-query";
import {type IInvalidator}     from "../api/IInvalidator";
import {type IMutationOptions} from "../api/IMutationOptions";
import {type IWithMutation}    from "../api/IWithMutation";
import {type IRequestSchema}   from "../schema/RequestSchema";
import {type IResponseSchema}  from "../schema/ResponseSchema";
import {RpcStore}              from "../store/RpcStore";
import {withBulk}              from "../utils/withBulk";

export interface IWithMutationProps<TRequestSchema extends IRequestSchema, TResponseSchema extends IResponseSchema> {
    key?: MutationKey;
    service: string;
    schema: {
        request: TRequestSchema,
        response: TResponseSchema,
    },
    /**
     * When a mutation is successful, run this query invalidator (basically could be anything); consider this method
     * as a specialized case of "onSuccess", but **do not** use it like it.
     */
    invalidator?: IInvalidator;
}

/**
 * Creates useMutation hook (basically same as the one in React Query).
 */
export const withMutation = <TRequestSchema extends IRequestSchema, TResponseSchema extends IResponseSchema>(
    {
        key,
        service,
        schema: {
                    request:  requestSchema,
                    response: responseSchema,
                },
        invalidator,
    }: IWithMutationProps<TRequestSchema, TResponseSchema>): IWithMutation<TRequestSchema, TResponseSchema> => {
    const mutationKey = (key || [service]);
    return {
        key:         mutationKey as string[],
        service,
        schema:      {
            request:  requestSchema,
            response: responseSchema,
        },
        invalidator,
        useMutation: ({
                          mutationKey: $mutationKey,
                          onSuccess,
                          ...options
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
                onSuccess: (data, variables, context) => {
                    invalidator?.({});
                    onSuccess?.(data, variables, context);
                },
            });
        },
    };
};
