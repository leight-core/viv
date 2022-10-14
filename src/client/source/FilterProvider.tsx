import {
    cleanOf,
    FilterContext,
    IFilterContext,
    IProviderChildren,
    isEmpty,
    merge,
    withProviderChildren
} from "@leight-core/viv";
import {
    useEffect,
    useState
} from "react";

export interface IFilterProviderProps<TFilter = any> {
    name: string;
    /**
     * Default pre-set filter; could be overridden by a user. Apply filter prop takes precedence.
     */
    defaultFilter?: TFilter;
    /**
     * Apply the given filter all the times (regardless of values set by a user)
     */
    applyFilter?: TFilter;
    defaultSource?: any;
    children?: IProviderChildren<IFilterContext>;
}

export function FilterProvider<TFilter, >({name, defaultFilter, applyFilter, defaultSource, children}: IFilterProviderProps<TFilter>) {
    /**
     * Currently set filter; applied with defaults/applied.
     */
    const [filter, setFilter]   = useState<TFilter | undefined>(applyFilter || defaultFilter);
    /**
     * Filter set by the user; this is useful to distinguish isEmpty() which could contain applied filters which
     * should not be visible by the user
     */
    const [request, setRequest] = useState<TFilter | undefined>();
    /**
     * When used in a form, for example, this is the source used to build-up this filter.
     */
    const [source, setSource]   = useState(defaultSource);

    const $setFilter = (value?: TFilter, request?: TFilter, source?: any) => {
        const filter = cleanOf(value);
        setFilter(isEmpty(filter) ? undefined : filter);
        setRequest(request);
        setSource(source);
    };

    useEffect(() => {
        $setFilter(merge<any, any>(defaultFilter || {}, applyFilter || {}));
    }, [
        defaultFilter,
        applyFilter
    ]);

    return <FilterContext.Provider
        value={{
            name,
            filter,
            source,
            setFilter:   (filter, source) => setTimeout(() => {
                $setFilter({...filter, ...applyFilter}, filter, source);
            }, 0),
            applyFilter: (apply, source) => setTimeout(() => {
                $setFilter({...filter, ...apply, ...applyFilter}, apply, source);
            }, 0),
            mergeFilter: (apply, source) => setTimeout(() => {
                $setFilter(merge<any, any>(merge<any, any>(filter || {}, apply || {}), applyFilter || {}), apply, source);
            }, 0),
            isEmpty:     () => isEmpty(request),
        }}
    >
        {withProviderChildren(children, FilterContext)}
    </FilterContext.Provider>;
}
