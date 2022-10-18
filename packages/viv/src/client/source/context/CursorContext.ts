import {
    contextFactory,
    ICursorContext
} from "@leight/viv";

export const [
                 CursorContext,
                 useCursorContext,
                 useOptionalCursorContext,
             ] = contextFactory<ICursorContext>("CursorContext");
