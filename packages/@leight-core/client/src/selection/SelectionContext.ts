import {ISelectionContext} from "@leight-core/api";
import {createContext}     from "react";
import {
	useContext,
	useOptionalContext
}                          from "../context";

export const SelectionContext = createContext<ISelectionContext<any>>(null as any);

export const useSelectionContext = <TSelection>() => useContext<ISelectionContext<TSelection>>(SelectionContext, "SelectionContext");

export const useOptionalSelectionContext = <TSelection>() => useOptionalContext<ISelectionContext<TSelection>>(SelectionContext as any);
