import {type InferQuery, type IQuery} from "./IQuery";

export interface IQuerySource<
	TEntity extends Record<string, any>,
	TQuery extends IQuery = IQuery,
> {
	/**
	 * Run a query and return promise with the result.
	 */
	query(query: TQuery): Promise<TEntity[]>;

	/**
	 * Fetch a single optional entity.
	 */
	fetch(query: TQuery): Promise<TEntity | null>;

	/**
	 * Find required entity; if not found, an error should be thrown.
	 */
	find(query: TQuery): Promise<TEntity>;

	/**
	 * Get an entity (required) by the given id.
	 */

	get(id: string): Promise<TEntity>;

	/**
	 * Return count of items by the given query.
	 */
	count(query: TQuery): Promise<number>;

	/**
	 * General method for converting input filter from a query into an output (for example, applying fulltext).
	 */
	withFilter(query: TQuery): InferQuery.Filter<TQuery> | undefined;
}

export namespace QuerySourceInfer {
	export type Entity<T> = T extends IQuerySource<infer U, any> ? U : T;
	export type Query<T> = T extends IQuerySource<any, infer U> ? U : T;
}
