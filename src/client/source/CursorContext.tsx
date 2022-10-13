import {
    createContext,
    ICursorContext,
    useContext,
    useOptionalContext
} from "@leight-core/viv";

export const CursorContext = createContext<ICursorContext>();

export const useCursorContext = () => useContext<ICursorContext>(CursorContext, "CursorContext");

export const useOptionalCursorContext = () => useOptionalContext<ICursorContext>(CursorContext);
