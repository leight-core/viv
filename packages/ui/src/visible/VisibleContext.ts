import {
    Context,
    IVisibleContext
} from "@leight/ui";

export const [
                 VisibleContext,
                 useVisibleContext,
                 useOptionalVisibleContext,
             ] = Context.factory<IVisibleContext>("VisibleContext");
