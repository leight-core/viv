import {type IWithIdentity}        from "@leight/query";
import {createStore}               from "@leight/store";
import {type ISelectionStore}      from "../api/ISelectionStore";
import {type ISelectionStoreProps} from "../api/ISelectionStoreProps";

export interface ICreateSelectionStoreProps {
    name: string;
}

export const createSelectionStore = <TItem extends IWithIdentity>(
    {
        name,
    }: ICreateSelectionStoreProps
): ISelectionStore<TItem> => {
    return createStore<ISelectionStoreProps<TItem>>({
        state: () => (set, get) => ({
            item:      undefined,
            selection: undefined,
            clear() {
                set({
                    item:      undefined,
                    selection: undefined
                });
            },
            commit() {
                set(state => ({
                    item: state.selection,
                }));
            },
            cancel() {
                set({selection: undefined});
            },
            select(selection) {
                set({selection});
            },
            isSelected(item) {
                return get().selection?.id === item.id;
            },
            required() {
                const item = get().item;
                if (!item) {
                    throw new Error(`Selection [${name}] has no selected item.`);
                }
                return item;
            },
        }),
        name,
    });
};
