import {IPaginationContext} from "@leight-core/api";
import {createContext} from "react";
import {useContext, useOptionalContext} from "../context";

export const PaginationContext = createContext<IPaginationContext>(null as any);

export const usePaginationContext = () => useContext<IPaginationContext>(PaginationContext, "PaginationContext");

export const useOptionalPaginationContext = () => useOptionalContext<IPaginationContext>(PaginationContext as any);
