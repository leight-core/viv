import {IQueryParams} from "@leight/viv";

export type INavigate<TQueryParams extends IQueryParams = any> = (href: string, queryParams?: TQueryParams) => void;
