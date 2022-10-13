import {
    contextFactory,
    IVisibleContext
} from "@leight-core/viv";

export const [
                 VisibleContext,
                 useVisibleContext,
                 useOptionalVisibleContext,
             ] = contextFactory<IVisibleContext>("VisibleContext");
