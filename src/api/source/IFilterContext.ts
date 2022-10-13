export interface IFilterContext<TFilter = any> {
	/**
	 * Name of this filter context.
	 */
	readonly name: string;

	/**
	 * Currently set filtering.
	 */
	readonly filter: TFilter;
	/**
	 * When filtering from a form or any kind of source which is mapping filter,
	 * this is the original request (for example from filter form or so.).
	 *
	 * It's useful to restore filter form with the current filter.
	 */
	readonly source: any;

	/**
	 * Set the given filter as current (thus replacing one already set).
	 */
	setFilter(filter?: TFilter, source?: any): void;

	/**
	 * Apply the given filter, thus merging with the one already set, but replacing first-level properties (thus there is no deep-merge).
	 */
	applyFilter(filter?: TFilter, source?: any): void;

	/**
	 * Deep merge with the current filter.
	 */
	mergeFilter(filter?: TFilter, source?: any): void;

	isEmpty(): boolean;
}
