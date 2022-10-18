import {
    contextFactory,
    IMenuSelectionContext
} from "@leight/viv";

export const [
                 MenuSelectionContext,
                 useMenuSelectionContext,
                 useOptionalMenuSelectionContext
             ] = contextFactory<IMenuSelectionContext>("MenuSelectionContext");
