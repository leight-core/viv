import {
    Context,
    ICursorContext
} from "@leight/ui";

export const [
                 CursorContext,
                 useCursorContext,
                 useOptionalCursorContext,
             ] = Context.factory<ICursorContext>("CursorContext");
