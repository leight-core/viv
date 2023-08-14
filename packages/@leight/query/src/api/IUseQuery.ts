import {type z}               from "@leight/utils";
import {type IQueryOptions}   from "./IQueryOptions";
import {type IUseQueryResult} from "./IUseQueryResult";

export namespace IUseQuery {
    export interface Use<
        TResponseSchema extends z.ZodSchema,
    > {
        (options?: IQueryOptions<z.infer<TResponseSchema>>["options"]): IUseQueryResult<z.infer<TResponseSchema>>;
    }

    export interface UseEx<
        TRequestSchema extends z.ZodSchema,
        TResponseSchema extends z.ZodSchema,
    > {
        (props: IQueryOptions<z.infer<TResponseSchema>, z.infer<TRequestSchema>>): IUseQueryResult<z.infer<TResponseSchema>>;
    }
}
