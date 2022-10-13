import {IPaginationContext} from "@leight-core/api";
import {
	useContext,
	useOptionalContext
}                           from "@leight-core/client";
import {createContext}      from "react";

export const PaginationContext = createContext<IPaginationContext>(null as any);

export const usePaginationContext = () => useContext<IPaginationContext>(PaginationContext, "PaginationContext");

export const useOptionalPaginationContext = () => useOptionalContext<IPaginationContext>(PaginationContext as any);
