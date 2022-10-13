export type IQueryParams = Record<string, string | number | undefined>;

export interface IQueryParamsContext<TQueryParams extends IQueryParams | undefined = undefined> {
    readonly queryParams: TQueryParams;

    setQueryParams(queryParams?: TQueryParams): void;
}
