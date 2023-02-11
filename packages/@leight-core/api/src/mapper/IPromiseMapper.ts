export interface IPromiseMapper<TSource, TTarget> {
	/**
	 * Map all the given source to targets.
	 */
	list(source: Promise<TSource[]>): Promise<TTarget[]>;

	/**
	 * Actual mapper.
	 */
	map(source: TSource): Promise<TTarget>;

	mapNull(source?: TSource | null): Promise<TTarget | undefined>;
}

export namespace PromiseMapperInfer {
	export type Source<T> = T extends IPromiseMapper<infer TSource, any> ? TSource : T;
	export type Target<T> = T extends IPromiseMapper<any, infer TTarget> ? TTarget : T;
}
