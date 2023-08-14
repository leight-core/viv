import {type z}              from "@leight/utils";
import {type UseQueryResult} from "@tanstack/react-query/build/modern";
import {type IErrorResponse} from "../schema/ErrorResponseSchema";
import {type IQueryOptions}  from "./IQueryOptions";

export namespace IUseQuery {
    export interface Use<
        TResponseSchema extends z.ZodSchema,
    > {
        (options?: IQueryOptions<z.infer<TResponseSchema>>["options"]): Result<z.infer<TResponseSchema>>;
    }

    export interface UseEx<
        TRequestSchema extends z.ZodSchema,
        TResponseSchema extends z.ZodSchema,
    > {
        (props: IQueryOptions<z.infer<TResponseSchema>, z.infer<TRequestSchema>>): Result<z.infer<TResponseSchema>>;
    }

    export type UseList<TSchema extends z.ZodSchema> = IUseQuery.Use<z.ZodArray<z.infer<TSchema>>>;

    export type Result<TResponse> = UseQueryResult<TResponse, IErrorResponse>;
}
