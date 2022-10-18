import {IWithIdentity} from "@leight/shared";
import {
    ISelectionContext,
    useSelectionContext
}                      from "@leight/ui";
import {useEffect}     from "react";

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
    /**
     * @TODO I think this piece of useEffect can kill some React master as this really does not follow some good practices... soo? FIX THAT SHIT!
     */
    useEffect(() => {
        selectionContext.clear();
        ofSelection({
            value,
            selectionContext,
        });
    }, [JSON.stringify(value)]);
    return null;
}
