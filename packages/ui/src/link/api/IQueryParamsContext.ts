import {IQueryParams} from "@leight/shared";

export interface IQueryParamsContext<TQueryParams extends IQueryParams = IQueryParams> {
    readonly queryParams: TQueryParams;

    setQueryParams(queryParams?: TQueryParams): void;
}
