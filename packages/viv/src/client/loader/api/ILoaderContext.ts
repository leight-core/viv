export interface ILoaderContext {
    /**
     * Check the loading state.
     */
    isLoading(): boolean;

    /**
     * Set loading state, true by default.
     * @param loading
     */
    loading(loading?: boolean): void;

    /**
     * Finish loading (set loading false).
     */
    done(): void;
}
