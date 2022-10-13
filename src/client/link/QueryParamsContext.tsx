import {
	IQueryParams,
	IQueryParamsContext
}                      from "@leight-core/api";
import {
	useContext,
	useOptionalContext
}                      from "@leight-core/client";
import {createContext} from "react";

export const QueryParamsContext = createContext<IQueryParamsContext<any>>(null as any);

export const useQueryParamsContext = <TQueryParams extends IQueryParams | undefined = undefined, >() => useContext<IQueryParamsContext<TQueryParams>>(QueryParamsContext, "QueryParamsContext");

export const useOptionalQueryParamsContext = <TQueryParams extends IQueryParams | undefined = undefined, >() => useOptionalContext<IQueryParamsContext<TQueryParams>>(QueryParamsContext as any);
