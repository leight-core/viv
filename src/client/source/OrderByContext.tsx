import {IOrderByContext} from "@leight-core/api";
import {
	useContext,
	useOptionalContext
}                        from "@leight-core/client";
import {createContext}   from "react";

export const OrderByContext = createContext<IOrderByContext>(null as any);

export const useOrderByContext = <TOrderBy, >() => useContext<IOrderByContext<TOrderBy>>(OrderByContext, "OrderByContext");

export const useOptionalOrderByContext = <TOrderBy, >() => useOptionalContext<IOrderByContext<TOrderBy>>(OrderByContext as any);
