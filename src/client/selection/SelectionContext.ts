import {
    contextFactory,
    ISelectionContext
} from "@leight/viv";

export const [
                 SelectionContext,
                 useSelectionContext,
                 useOptionalSelectionContext,
             ] = contextFactory<ISelectionContext<any>>("SelectionContext");
