/**
 * Common interface for support blocking UI.
 */
export interface IBlockContext {
    /**
     * Tells if this context is blocked.
     */
    isBlocked(): boolean;

    /**
     * Set state of a block context; by default blocks.
     */
    block(state?: boolean): void;

    /**
     * Updates blocking state of the context; could be called more times as it maintains loader count.
     *
     * When unlock is true, context will be unlocked regardless of blocking count.
     */
    unblock(): void;
}
