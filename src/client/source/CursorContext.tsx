import {ICursorContext} from "@leight-core/api";
import {
	useContext,
	useOptionalContext
}                       from "@leight-core/client";
import {createContext}  from "react";

export const CursorContext = createContext<ICursorContext>(null as any);

export const useCursorContext = () => useContext<ICursorContext>(CursorContext, "CursorContext");

export const useOptionalCursorContext = () => useOptionalContext<ICursorContext>(CursorContext as any);
