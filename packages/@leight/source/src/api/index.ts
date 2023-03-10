import {type ICursorSchema} from "@leight/cursor";
import {type IFilterSchema} from "@leight/filter";
import {
    type IParamsSchema,
    type IQuery,
    type IQuerySchema
}                           from "@leight/query";
import {type ISortSchema}   from "@leight/sort";
import {type IToString}     from "@leight/utils";
import {z}                  from "zod";

export type ISourceName =
    string
    | IToString;

export const EntitySchema = z.object({
    id: z.string().cuid2(),
});

export type IEntitySchema = typeof EntitySchema;

export type IEntity = z.infer<IEntitySchema>;

/**
 * Source schema definition. Contains all the types used in the Source.
 */
export interface ISourceSchema<
    TEntitySchema extends IEntitySchema = IEntitySchema,
    TFilterSchema extends IFilterSchema = IFilterSchema,
    TSortSchema extends ISortSchema = ISortSchema,
    TParamsSchema extends IParamsSchema = IParamsSchema,
> {
    EntitySchema: TEntitySchema;
    Entity: z.infer<TEntitySchema>;
    FilterSchema: TFilterSchema;
    Filter: z.infer<TFilterSchema>;
    SortSchema: TSortSchema;
    Sort: z.infer<TSortSchema>;
    ParamsSchema: TParamsSchema;
    Params: z.infer<TParamsSchema>;
    CursorSchema: ICursorSchema;
    Cursor: z.infer<ICursorSchema>;
    QuerySchema: IQuerySchema<TFilterSchema, TSortSchema, TParamsSchema>;
    Query: IQuery<TFilterSchema, TSortSchema, TParamsSchema>;
}

/**
 * Implementation of data source (general, not just a database one).
 */
export interface ISource<TSourceSchema extends ISourceSchema<any>> {
    /**
     * Count items based on an optional query.
     */
    count(query?: TSourceSchema["Query"]): Promise<number>;

    /**
     * Query items.
     */
    query(query?: TSourceSchema["Query"]): Promise<TSourceSchema["Entity"][]>;

    find(id: string): Promise<TSourceSchema["Entity"]>;
}
