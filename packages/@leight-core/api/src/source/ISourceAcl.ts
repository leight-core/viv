export interface ISourceAcl {
	/**
	 * Apply default required tokens:
	 * - "*" (all)
	 * - "{source.name}.{operation name}
	 */
	lock?: boolean;
	/**
	 * Default required tokens for all operations.
	 */
	default?: string[];
	/**
	 * Required tokens for count.
	 */
	count?: string[];
	/**
	 * Required tokens for query.
	 */
	query?: string[];
	/**
	 * Required tokens for get.
	 */
	get?: string[];
	/**
	 * Required tokens for find.
	 */
	find?: string[];
	/**
	 * Required tokens for fetch.
	 */
	fetch?: string[];
	/**
	 * Required tokens for create.
	 */
	create?: string[];
	/**
	 * Required tokens for import.
	 * This should not further check for "create" and "update" tokens.
	 */
	import?: string[];
	/**
	 * Required tokens for patch.
	 */
	patch?: string[];
	/**
	 * Required tokens for delete.
	 */
	remove?: string[];
	/**
	 * Required tokens for using mapper.
	 */
	mapper?: string[];
}
