import {
    IPaginationContext,
    useContext,
    useOptionalContext
}                      from "@leight-core/viv";
import {createContext} from "react";

export const PaginationContext = createContext<IPaginationContext>(null as any);

export const usePaginationContext = () => useContext<IPaginationContext>(PaginationContext, "PaginationContext");

export const useOptionalPaginationContext = () => useOptionalContext<IPaginationContext>(PaginationContext as any);
