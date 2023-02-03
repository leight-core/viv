/**
 * Common interface for support blocking UI.
 */
export interface IBlockContext {
	/**
	 * Number of request blockings (could be more than one).
	 */
	count(): number;

	/**
	 * Tells if this context is blocked.
	 */
	isBlocked(): boolean;

	/**
	 * Block this context; could be called many times; to unlock a context, unblock must be called equal times to unblock.
	 *
	 * If temp is true, than blocking is not stacked and the first unblock() call will unblock this context.
	 */
	block(temp?: boolean): void;

	/**
	 * Updates blocking state of the context; could be called more times as it maintains loader count.
	 *
	 * When unlock is true, context will be unlocked regardless of blocking count.
	 */
	unblock(unlock?: boolean): void;
}
