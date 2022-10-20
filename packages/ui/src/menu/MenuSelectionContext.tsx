import {
    Context,
    IMenuSelectionContext
} from "@leight/ui";

export const [
                 MenuSelectionContext,
                 useMenuSelectionContext,
                 useOptionalMenuSelectionContext
             ] = Context.factory<IMenuSelectionContext>("MenuSelectionContext");
