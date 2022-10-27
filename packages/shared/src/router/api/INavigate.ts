import {Url} from "@leight/utils";

export type INavigate<TQuery extends Url.IQuery = Url.IQuery> = (href: string, queryParams?: TQuery) => void;
