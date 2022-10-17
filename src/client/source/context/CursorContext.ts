import {
    contextFactory,
    ICursorContext
} from "@leight-core/viv";

export const [
                 CursorContext,
                 useCursorContext,
                 useOptionalCursorContext,
             ] = contextFactory<ICursorContext>("CursorContext");
