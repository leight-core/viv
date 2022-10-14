import {
    contextFactory,
    IItemGroupContext
} from "@leight-core/viv";

export const [
                 ItemGroupContext,
                 useItemGroupContext,
                 useOptionalItemGroupContext,
             ] = contextFactory<IItemGroupContext>("ItemGroupContext");
