import {InferModel} from "@leight/drizzle";
import {IToString}  from "@leight/utils";
import {z}          from "zod";

export type ISourceName =
    string
    | IToString;

/**
 * Common entity returned from a Source; should be serializable.
 */
export interface IEntity {
    readonly id: string;
}

export interface ISourceConfig<
    TQuery extends z.ZodObject<any>,
    // TUpdate = any,
    // TFilter extends IFilter = IFilter,
    // TSort extends ISort = ISort,
    // TParams extends IParams = IParams,
> {
    Schema: TSchema;
    Query: TQuery;
    Entity: InferModel<TSchema>;
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
export interface ISource<TSourceConfig extends ISourceConfig<any, any>> {
    /**
     * Count items based on an optional query.
     */
    count(query?: TSourceConfig["Query"]): Promise<number>;

    /**
     * Query items.
     */
    query(query?: TSourceConfig["Query"]): Promise<TSourceConfig["Entity"][]>;
}
