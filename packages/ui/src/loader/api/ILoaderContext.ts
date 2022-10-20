export interface ILoaderContext {
    isLoading(): boolean;

    loading(loading?: boolean): void;

    done(): void;
}
