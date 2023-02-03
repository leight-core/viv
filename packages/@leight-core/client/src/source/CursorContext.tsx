import {ICursorContext} from "@leight-core/api";
import {createContext} from "react";
import {useContext, useOptionalContext} from "../context";

export const CursorContext = createContext<ICursorContext>(null as any);

export const useCursorContext = () => useContext<ICursorContext>(CursorContext, "CursorContext");

export const useOptionalCursorContext = () => useOptionalContext<ICursorContext>(CursorContext as any);
