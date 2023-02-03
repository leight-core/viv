import {IOrderByContext} from "@leight-core/api";
import {createContext} from "react";
import {useContext, useOptionalContext} from "../context";

export const OrderByContext = createContext<IOrderByContext>(null as any);

export const useOrderByContext = <TOrderBy, >() => useContext<IOrderByContext<TOrderBy>>(OrderByContext, "OrderByContext");

export const useOptionalOrderByContext = <TOrderBy, >() => useOptionalContext<IOrderByContext<TOrderBy>>(OrderByContext as any);
