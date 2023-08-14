import {type z}                 from "@leight/utils";
import {type UseMutationResult} from "@tanstack/react-query/build/modern";
import {type IErrorResponse}    from "../schema/ErrorResponseSchema";
import {type IMutationOptions}  from "./IMutationOptions";

export namespace IUseMutation {
    export interface Use<
        TRequestSchema extends z.ZodSchema,
        TResponseSchema extends z.ZodSchema,
    > {
        (props?: IMutationOptions<z.infer<TRequestSchema>, z.infer<TResponseSchema>>): Result<z.infer<TRequestSchema>, z.infer<TResponseSchema>>;
    }

    export type Result<TRequest, TResponse> = UseMutationResult<TResponse, IErrorResponse, TRequest>;
}
