import {
    ISelectionContext,
    useContext,
    useOptionalContext
}                      from "@leight-core/viv";
import {createContext} from "react";

export const SelectionContext = createContext<ISelectionContext<any>>(null as any);

export const useSelectionContext = <TSelection>() => useContext<ISelectionContext<TSelection>>(SelectionContext, "SelectionContext");

export const useOptionalSelectionContext = <TSelection>() => useOptionalContext<ISelectionContext<TSelection>>(SelectionContext as any);
