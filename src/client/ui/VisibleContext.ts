import {IVisibleContext} from "@leight-core/api";
import {
	useContext,
	useOptionalContext
}                        from "@leight-core/client";
import {createContext}   from "react";

export const VisibleContext = createContext<IVisibleContext>(null as any);

export const useVisibleContext         = () => useContext<IVisibleContext>(VisibleContext, "VisibleContext");
export const useOptionalVisibleContext = () => useOptionalContext<IVisibleContext>(VisibleContext as any);
