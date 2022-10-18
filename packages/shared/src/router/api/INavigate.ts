import {IQueryParams} from "@leight/shared";

export type INavigate<TQueryParams extends IQueryParams = any> = (href: string, queryParams?: TQueryParams) => void;
