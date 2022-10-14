import {
    contextFactory,
    IMenuSelectionContext
} from "@leight-core/viv";

export const [
                 MenuSelectionContext,
                 useMenuSelectionContext,
                 useOptionalMenuSelectionContext
             ] = contextFactory<IMenuSelectionContext>("MenuSelectionContext");
