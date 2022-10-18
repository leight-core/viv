import {
    contextFactory,
    IItemGroupContext
} from "@leight/viv";

export const [
                 ItemGroupContext,
                 useItemGroupContext,
                 useOptionalItemGroupContext,
             ] = contextFactory<IItemGroupContext>("ItemGroupContext");
