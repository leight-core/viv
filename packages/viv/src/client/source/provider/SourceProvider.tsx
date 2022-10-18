import {
    merge,
    uniqueOf
}                 from "@leight/utils";
import {
    IProviderChildren,
    IQuery,
    IQueryHook,
    ISourceContext,
    IWithIdentity,
    SourceContext,
    useOptionalCursorContext,
    useOptionalFilterContext,
    useOptionalOrderByContext,
    useOptionalQueryParamsContext,
    withProviderChildren
}                 from "@leight/viv";
import {
    useQuery as useCoolQuery,
    UseQueryOptions
}                 from "@tanstack/react-query";
import {useState} from "react";
import {useMemo}  from "use-memo-one";

export interface ISourceProviderProps<TResponse extends IWithIdentity> {
    name: string;
    /**
     * Source of the query
     */
    useQuery: IQueryHook<IQuery, TResponse[]>;
    /**
     * Query used to count backend items by the given query (for pagination).
     */
    useCountQuery?: IQueryHook<IQuery, number>;
    /**
     * Enables live refetches of the query
     */
    live?: number | false,
    /**
     * Query options.
     */
    options?: UseQueryOptions<any, any, TResponse[]>;

    onSuccess?(response: TResponse[]): void;

    withCount?: boolean;
    children?: IProviderChildren<ISourceContext<TResponse>>;
}

export const SourceProvider = <TResponse extends IWithIdentity>(
    {
        name,
        useQuery,
        useCountQuery,
        withCount = false,
        live = false,
        options,
        onSuccess,
        children,
    }: ISourceProviderProps<TResponse>
) => {
    const filterContext      = useOptionalFilterContext();
    const orderByContext     = useOptionalOrderByContext();
    const cursorContext      = useOptionalCursorContext();
    const queryParamsContext = useOptionalQueryParamsContext();
    const [data, setData]    = useState<TResponse[]>([]);

    if (!withCount) {
        useCountQuery = undefined;
    }
    if (!useCountQuery || !cursorContext) {
        useCountQuery = () => useCoolQuery<number>({
            queryFn: () => 0,
        });
    }

    const query = useQuery({
        size:    cursorContext?.size,
        page:    cursorContext?.page,
        filter:  filterContext?.filter,
        orderBy: orderByContext?.orderBy,
    }, queryParamsContext?.queryParams, merge({
        keepPreviousData: true,
        refetchInterval:  live,
        onSuccess:        (response: TResponse[]) => {
            onSuccess?.(response);
            if (cursorContext?.append) {
                setData(prev => uniqueOf(prev.concat(response), "id"));
                return;
            }
            if (cursorContext?.prepend) {
                setData(prev => {
                    prev.unshift(...response);
                    return uniqueOf(prev, "id");
                });
                return;
            }
            setData(uniqueOf(response, "id"));
        },
    }, options || {}));
    useCountQuery({}, queryParamsContext?.queryParams, {
        keepPreviousData: true,
        refetchInterval:  live,
        onSuccess:        total => cursorContext?.setTotal(total),
    });
    useCountQuery({
        filter: filterContext?.filter,
    }, queryParamsContext?.queryParams, {
        keepPreviousData: true,
        refetchInterval:  live,
        onSuccess:        count => cursorContext?.setPages(count),
    });

    return <SourceContext.Provider
        value={useMemo(() => {
            const hasData = () => Array.isArray(data) && data.length > 0;
            return {
                name,
                get result() {
                    return query;
                },
                hasData,
                map:   mapper => hasData() ? (data?.map(mapper) || []) : [],
                data:  () => hasData() ? (data || []) : [],
                reset: () => {
                    setData([]);
                    cursorContext?.setPage(0);
                },
            };
        }, [name])}
    >
        {withProviderChildren(children, SourceContext)}
    </SourceContext.Provider>;
};
