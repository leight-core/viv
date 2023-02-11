import {type IQueryParams} from "../link";

export type INavigate<TQueryParams extends IQueryParams = any> = (href: string, queryParams?: TQueryParams) => void;
