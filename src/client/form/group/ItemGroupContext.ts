import {
    IItemGroupContext,
    useContext,
    useOptionalContext
}                      from "@leight-core/viv";
import {createContext} from "react";

export const ItemGroupContext = createContext<IItemGroupContext>(null as any);

export const useItemGroupContext = () => useContext<IItemGroupContext>(ItemGroupContext, "ItemGroupContext");

export const useOptionalItemGroupContext = () => useOptionalContext<IItemGroupContext>(ItemGroupContext as any);
