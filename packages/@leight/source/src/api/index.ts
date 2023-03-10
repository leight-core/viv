import {IQuerySchema} from "@leight/query";
import {IToString}    from "@leight/utils";

export type ISourceName =
    string
    | IToString;

/**
 * Common entity returned from a Source; should be serializable.
 */
export interface IEntity {
    readonly id: string;
}

export interface ISourceSchema<
    TQuerySchema extends IQuerySchema,
    // TUpdate = any,
    // TFilter extends IFilter = IFilter,
    // TSort extends ISort = ISort,
    // TParams extends IParams = IParams,
> {
    Query: TQuerySchema;
    // Create: z.ZodObject<BuildInsertSchema<TSchema, undefined, {}>>;
    // DTO: TEntity;
    // Create: TCreate;
    // Update: TUpdate;
    // Filter: TFilter;
    // Sort: TSort;
    // Query: IQuery<TFilter, TSort, TParams>;
}

/**
 * Implementation of data source (general, not just a database one).
 */
export interface ISource<TSourceConfig extends ISourceSchema<any, any>> {
    /**
     * Count items based on an optional query.
     */
    count(query?: TSourceConfig["Query"]): Promise<number>;

    /**
     * Query items.
     */
    query(query?: TSourceConfig["Query"]): Promise<TSourceConfig["Entity"][]>;
}
