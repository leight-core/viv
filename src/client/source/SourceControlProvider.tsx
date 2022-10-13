import {
    CursorContext,
    CursorProvider,
    FilterContext,
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
    OrderByContext,
    OrderByProvider,
    QueryParamsContext,
    QueryParamsProvider
}                  from "@leight-core/viv";
import {ReactNode} from "react";

export interface ISourceControlProviderRender<TFilter = any, TOrderBy = any, TQueryParams extends IQueryParams | undefined = undefined> {
    queryContext: IQueryParamsContext<TQueryParams>;
    filterContext: IFilterContext<TFilter>;
    orderByContext: IOrderByContext<TOrderBy>;
    cursorContext: ICursorContext;
}

export interface ISourceControlProviderProps<TFilter = any, TOrderBy = any, TQueryParams extends IQueryParams | undefined = undefined> {
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

export function SourceControlProvider<TFilter = any, TOrderBy = any, TQueryParams extends IQueryParams | undefined = undefined>(
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
        <FilterProvider<TFilter>
            name={`${name}.Filter`}
            defaultFilter={defaultFilter}
            applyFilter={applyFilter}
            defaultSource={defaultSource}
            {...filterProviderProps}
        >
            <OrderByProvider<TOrderBy>
                name={`${name}.OrderBy`}
                defaultOrderBy={defaultOrderBy}
                {...orderByProviderProps}
            >
                <CursorProvider
                    name={`${name}.Cursor`}
                    defaultPage={defaultPage}
                    defaultSize={defaultSize}
                    {...cursorProviderProps}
                >
                    {isCallable(children) ? <QueryParamsContext.Consumer>
                        {queryContext => <FilterContext.Consumer>
                            {filterContext => <OrderByContext.Consumer>
                                {orderByContext => <CursorContext.Consumer>
                                    {cursorContext => (children as ((render: ISourceControlProviderRender<TFilter, TOrderBy, TQueryParams>) => ReactNode))({
                                        cursorContext,
                                        orderByContext,
                                        queryContext,
                                        filterContext,
                                    })}
                                </CursorContext.Consumer>}
                            </OrderByContext.Consumer>}
                        </FilterContext.Consumer>}
                    </QueryParamsContext.Consumer> : children as ReactNode}
                </CursorProvider>
            </OrderByProvider>
        </FilterProvider>
    </QueryParamsProvider>;
}
