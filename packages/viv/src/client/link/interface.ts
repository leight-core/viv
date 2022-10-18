export interface IQueryParamsContext<TQueryParams extends IQueryParams = any> {
    readonly queryParams: TQueryParams;

    setQueryParams(queryParams?: TQueryParams): void;
}
