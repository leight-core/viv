import {IItemGroupContext} from "@leight-core/api";
import {createContext} from "react";
import {useContext, useOptionalContext} from "../../context";

export const ItemGroupContext = createContext<IItemGroupContext>(null as any);

export const useItemGroupContext = () => useContext<IItemGroupContext>(ItemGroupContext, "ItemGroupContext");

export const useOptionalItemGroupContext = () => useOptionalContext<IItemGroupContext>(ItemGroupContext as any);
