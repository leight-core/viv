"use client";

import {type IMutationOptions} from "@leight/query";
import {type z}                from "@leight/utils";
import {
    type MutationKey,
    useMutation,
    useQueryClient
}                              from "@tanstack/react-query";
import {type IInvalidator}     from "../api/IInvalidator";
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
    invalidator?: IInvalidator.Invalidator;
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
        key:    mutationKey as string[],
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
                    queryKey: mutationKey,
                });
            });
        },
        useMutation: ({
                          mutationKey: $mutationKey,
                          onSuccess,
                          ...options
                      }: IMutationOptions<z.infer<TRequestSchema>, z.infer<TResponseSchema>> = {}) => {
            const queryClient = useQueryClient();
            const store = RpcStore.use();
            return useMutation({
                mutationKey: mutationKey.concat($mutationKey || []),
                mutationFn:  async request => {
                    try {
                        return withBulk<TRequestSchema, TResponseSchema>({
                            service,
                            request: requestSchema?.parse(request) ?? request,
                            store,
                            schema:  responseSchema,
                        });
                    } catch (e) {
                        console.error(e);
                        throw e;
                    }
                },
                ...options,
                onSuccess: (data, variables, context) => {
                    invalidator?.({
                        queryClient,
                    });
                    onSuccess?.(data, variables, context);
                },
            });
        },
    };
};
