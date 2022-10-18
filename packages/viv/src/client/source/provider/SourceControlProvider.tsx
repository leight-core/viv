import {
    CursorProvider,
    FilterProvider,
    ICursorContext,
    ICursorProviderProps,
    IFilterContext,
    IFilterProviderProps,
    IOrderByContext,
    IOrderByProviderProps,
    IQueryParams,
    IQueryParamsContext,
    IQueryParamsProviderProps,
    isCallable,
    OrderByProvider,
    QueryParamsProvider
}                  from "@leight/viv";
import {ReactNode} from "react";

export interface ISourceControlProviderRender<TFilter = any, TOrderBy = any, TQueryParams extends IQueryParams = any> {
    queryContext: IQueryParamsContext<TQueryParams>;
    filterContext: IFilterContext<TFilter>;
    orderByContext: IOrderByContext<TOrderBy>;
    cursorContext: ICursorContext;
}

export interface ISourceControlProviderProps<TFilter = any, TOrderBy = any, TQueryParams extends IQueryParams = any> {
    name: string;
    filterProviderProps?: IFilterProviderProps<TFilter>;
    orderByProviderProps?: IOrderByProviderProps<TOrderBy>;
    queryParamsProviderProps?: IQueryParamsProviderProps<TQueryParams>;
    cursorProviderProps?: ICursorProviderProps;

    /**
     * Default pre-set filter; could be overridden by a user. Apply filter prop takes precedence.
     */
    defaultFilter?: TFilter;
    /**
     * Apply the given filter all the times (regardless of values set by a user)
     */
    applyFilter?: TFilter;
    defaultSource?: any;
    /**
     * Default pre-set order; could be overridden by a user. Apply filter prop takes precedence.
     */
    defaultOrderBy?: TOrderBy;
    defaultPage?: number;
    defaultSize?: number;
    defaultQueryParams?: TQueryParams;
    children?: ReactNode | ((render: ISourceControlProviderRender<TFilter, TOrderBy, TQueryParams>) => ReactNode);
}

export function SourceControlProvider<TFilter = any, TOrderBy = any, TQueryParams extends IQueryParams = any>(
    {
        name,
        filterProviderProps,
        orderByProviderProps,
        queryParamsProviderProps,
        cursorProviderProps,
        defaultFilter,
        applyFilter,
        defaultSource,
        defaultOrderBy,
        defaultPage,
        defaultSize,
        defaultQueryParams,
        children,
    }: ISourceControlProviderProps<TFilter, TOrderBy, TQueryParams>) {
    return <QueryParamsProvider<TQueryParams>
        defaultQueryParams={defaultQueryParams}
        {...queryParamsProviderProps}
    >
        {queryContext => <FilterProvider<TFilter>
            name={`${name}.Filter`}
            defaultFilter={defaultFilter}
            applyFilter={applyFilter}
            defaultSource={defaultSource}
            {...filterProviderProps}
        >
            {filterContext => <OrderByProvider<TOrderBy>
                name={`${name}.OrderBy`}
                defaultOrderBy={defaultOrderBy}
                {...orderByProviderProps}
            >
                {orderByContext => <CursorProvider
                    name={`${name}.Cursor`}
                    defaultPage={defaultPage}
                    defaultSize={defaultSize}
                    {...cursorProviderProps}
                >
                    {cursorContext => isCallable(children) ? (children as ((render: ISourceControlProviderRender<TFilter, TOrderBy, TQueryParams>) => ReactNode))({
                        cursorContext,
                        orderByContext,
                        queryContext,
                        filterContext,
                    }) : children as ReactNode}
                </CursorProvider>}
            </OrderByProvider>}
        </FilterProvider>}
    </QueryParamsProvider>;
}
