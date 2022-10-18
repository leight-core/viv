import {
    Context,
    ISelectionContext
} from "@leight/ui";

export const [
                 SelectionContext,
                 useSelectionContext,
                 useOptionalSelectionContext,
             ] = Context.factory<ISelectionContext<any>>("SelectionContext");
