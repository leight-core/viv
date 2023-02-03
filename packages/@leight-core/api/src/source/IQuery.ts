export interface IQuery<TFilter = any, TOrderBy = any> {
	/** currently requested page */
	readonly page?: number;
	/** limit number of items per page */
	readonly size?: number;
	/**
	 * support for exact item filtering (like by an id or name or whatever)
	 */
	readonly filter?: TFilter;
	/**
	 *  support for ordering items
	 */
	readonly orderBy?: TOrderBy;
}

export namespace InferQuery {
	export type Filter<T> = T extends IQuery<infer TFilter> ? TFilter : T;
	export type OrderBy<T> = T extends IQuery<any, infer TOrderBy> ? TOrderBy : T;
}
