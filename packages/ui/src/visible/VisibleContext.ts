import {
    contextFactory,
    IVisibleContext
} from "@leight/ui";

export const [
                 VisibleContext,
                 useVisibleContext,
                 useOptionalVisibleContext,
             ] = contextFactory<IVisibleContext>("VisibleContext");
