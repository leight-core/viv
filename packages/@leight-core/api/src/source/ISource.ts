import {
	type IContainer,
	type IWithContainer
}                                 from "../container";
import {type UndefinableOptional} from "../interface";
import {type IPromiseMapper}      from "../mapper";
import {type IMutationSource}     from "./IMutationSource";
import {type IWithIdentity}       from "./interface";
import {type IQuery}              from "./IQuery";
import {type IQuerySource}        from "./IQuerySource";
import {type IResolveSource}      from "./IResolveSource";

export interface ISource<
	TContainer extends IContainer,
	TEntity extends Record<string, any>,
	TItem extends Record<string, any>,
	TQuery extends IQuery = IQuery,
	TCreate extends Record<string, any> = any,
> extends IWithContainer<TContainer>,
	IMutationSource<TCreate, TEntity>,
	IQuerySource<TEntity, TQuery>,
	IResolveSource<TCreate> {
	/**
	 * Name of the source.
	 */
	readonly name: string;
	readonly mapper: {
		toItem: IPromiseMapper<TEntity, TItem>;
	};

	/**
	 * Generates hash string for the given query; it's useful for generating cache key for example.
	 */
	hashOf(query: TQuery, type?: string): string;

	/**
	 * Clear cache, if any.
	 */
	clearCache(): Promise<any>;
}

export namespace InferSource {
	export type Container<T> = T extends ISource<infer U, any, any> ? U : T;
	export type Entity<T> = T extends ISource<any, infer U, any> ? U : T;
	export type Item<T> = T extends ISource<any, any, infer U> ? U : T;
	export type Query<T> = T extends ISource<any, any, any, infer U> ? U : T;
	export type Create<T> = T extends ISource<any, any, any, any, infer U> ? U : T;
	export type Patch<T> = T extends ISource<any, any, any, any, infer U> ? UndefinableOptional<U> & IWithIdentity : T;
}
