import {IQueryParams}       from "@leight/shared";
import {
    Context,
    IProviderChildren,
    IQueryParamsContext
}                           from "@leight/ui";
import {QueryParamsContext} from "@leight/viv";
import {useState}           from "react";
import {useMemo}            from "use-memo-one";

export interface IQueryParamsProviderProps<TQueryParams extends IQueryParams = IQueryParams> {
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
            get queryParams() {
                return queryParams;
            },
            setQueryParams: queryParams => setQueryParams({...queryParams, ...applyQueryParams}),
        }), [])}
    >
        {Context.render(children, QueryParamsContext)}
    </QueryParamsContext.Provider>;
}
