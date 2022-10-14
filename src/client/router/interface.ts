import {IQueryParams} from "@leight-core/viv";

export type INavigate<TQueryParams extends IQueryParams = any> = (href: string, queryParams?: TQueryParams) => void;
