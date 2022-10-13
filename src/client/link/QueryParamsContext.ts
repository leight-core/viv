import {
    createContext,
    IQueryParams,
    IQueryParamsContext,
    useContext,
    useOptionalContext
} from "@leight-core/viv";

export const QueryParamsContext = createContext<IQueryParamsContext<any>>();

export const useQueryParamsContext = <TQueryParams extends IQueryParams | undefined = undefined>() => useContext<IQueryParamsContext<TQueryParams>>(QueryParamsContext, "QueryParamsContext");

export const useOptionalQueryParamsContext = <TQueryParams extends IQueryParams | undefined = undefined>() => useOptionalContext<IQueryParamsContext<TQueryParams>>(QueryParamsContext as any);
