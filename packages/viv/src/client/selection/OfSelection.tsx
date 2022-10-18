import {
    ISelectionContext,
    IWithIdentity,
    useSelectionContext
}                  from "@leight/viv";
import {useEffect} from "react";

export interface IOfSelection<TItem extends Record<string, any> & IWithIdentity = any, TOnChange = any> {
    value?: TOnChange;
    selectionContext: ISelectionContext<TItem>;
}

export interface IOfSelectionProps<TItem extends Record<string, any> & IWithIdentity = any, TOnChange = any> {
    value?: TOnChange;

    /**
     * Resolves values of selection into selection context.
     *
     * @param ofSelection
     */
    ofSelection(ofSelection: IOfSelection<TItem, TOnChange>): void;
}

/**
 * This is a utility component used to translate selected values (usually IDs) into an actual selection context.
 *
 * @param value
 * @param ofSelection
 * @constructor
 */
export function OfSelection<TItem extends Record<string, any> & IWithIdentity = any, TOnChange = any>(
    {
        value,
        ofSelection,
    }: IOfSelectionProps<TItem, TOnChange>) {
    const selectionContext = useSelectionContext();
    useEffect(() => {
        selectionContext.clear();
        ofSelection({
            value,
            selectionContext,
        });
    }, [JSON.stringify(value)]);
    return null;
}
