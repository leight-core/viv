import {
    contextFactory,
    IVisibleContext
} from "@leight/viv";

export const [
                 VisibleContext,
                 useVisibleContext,
                 useOptionalVisibleContext,
             ] = contextFactory<IVisibleContext>("VisibleContext");
