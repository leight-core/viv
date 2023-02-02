import {type IQuery} from "@leight/query";
import {type IEntity} from "./IEntity";

/**
 * Implementation of data source (general, not just a database one).
 */
export interface ISource<TEntity extends IEntity, TQuery extends IQuery<any, any, any>> {
    /**
     * Count items based on an optional query.
     */
    count(query?: TQuery): Promise<number>;

    /**
     * Query items.
     */
    query(query?: TQuery): Promise<TEntity[]>;
}

export namespace InferSource {
    export type Entity<T> = T extends ISource<infer U, any> ? U : T;
    export type Query<T> = T extends ISource<any, infer U> ? U : T;
}
