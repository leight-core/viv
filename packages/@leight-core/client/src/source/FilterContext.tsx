import {IFilterContext} from "@leight-core/api";
import {createContext}  from "react";
import {
	useContext,
	useOptionalContext
}                       from "../context";

export const FilterContext = createContext<IFilterContext>(null as any);

export const useFilterContext = <TFilter, >() => useContext<IFilterContext<TFilter>>(FilterContext, "FilterContext");

export const useOptionalFilterContext = <TFilter, >() => useOptionalContext<IFilterContext<TFilter>>(FilterContext as any);
