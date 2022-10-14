import {
    contextFactory,
    ISelectionContext
} from "@leight-core/viv";

export const [
                 SelectionContext,
                 useSelectionContext,
                 useOptionalSelectionContext,
             ] = contextFactory<ISelectionContext<any>>("SelectionContext");
