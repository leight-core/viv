import {
    IProviderChildren,
    IQueryParams,
    IQueryParamsContext,
    QueryParamsContext,
    withProviderChildren
} from "@leight-core/viv";
import {
    useMemo,
    useState
} from "react";

export interface IQueryParamsProviderProps<TQueryParams extends IQueryParams = any> {
    /**
     * Default pre-set query params; could be overridden by a user. Apply query prop takes precedence.
     */
    defaultQueryParams?: TQueryParams;
    /**
     * Apply the given query all the times (regardless of values set by a user)
     */
    applyQueryParams?: TQueryParams;
    children?: IProviderChildren<IQueryParamsContext<TQueryParams>>;
}

export function QueryParamsProvider<TQueryParams extends IQueryParams = any>({defaultQueryParams, applyQueryParams, children}: IQueryParamsProviderProps<TQueryParams>) {
    const [queryParams, setQueryParams] = useState<TQueryParams | undefined>(applyQueryParams || defaultQueryParams);
    return <QueryParamsContext.Provider
        value={useMemo(() => ({
            queryParams,
            setQueryParams: queryParams => setQueryParams({...queryParams, ...applyQueryParams}),
        }), [])}
    >
        {withProviderChildren(children, QueryParamsContext)}
    </QueryParamsContext.Provider>;
}
