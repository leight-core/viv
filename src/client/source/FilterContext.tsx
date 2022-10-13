import {
    IFilterContext,
    useContext,
    useOptionalContext
}                      from "@leight-core/viv";
import {createContext} from "react";

export const FilterContext = createContext<IFilterContext>(null as any);

export const useFilterContext = <TFilter, >() => useContext<IFilterContext<TFilter>>(FilterContext, "FilterContext");

export const useOptionalFilterContext = <TFilter, >() => useOptionalContext<IFilterContext<TFilter>>(FilterContext as any);
