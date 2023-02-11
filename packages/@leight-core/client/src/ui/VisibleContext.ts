import {IVisibleContext} from "@leight-core/api";
import {createContext}   from "react";
import {
	useContext,
	useOptionalContext
}                        from "../context";

export const VisibleContext = createContext<IVisibleContext>(null as any);

export const useVisibleContext         = () => useContext<IVisibleContext>(VisibleContext, "VisibleContext");
export const useOptionalVisibleContext = () => useOptionalContext<IVisibleContext>(VisibleContext as any);
