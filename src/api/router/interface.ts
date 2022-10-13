import {IQueryParams} from "@leight-core/api";

export type INavigate<TQueryParams extends IQueryParams = any> = (href: string, queryParams?: TQueryParams) => void;
