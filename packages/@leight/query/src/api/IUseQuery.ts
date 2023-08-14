import {type z}               from "@leight/utils";
import {type IQueryOptions}   from "./IQueryOptions";
import {type IUseQueryResult} from "./IUseQueryResult";

export type IUseQuery<
    TRequestSchema extends z.ZodSchema,
    TResponseSchema extends z.ZodSchema,
> = (props: IQueryOptions<z.infer<TResponseSchema>, z.infer<TRequestSchema>>) => IUseQueryResult<z.infer<TResponseSchema>>
