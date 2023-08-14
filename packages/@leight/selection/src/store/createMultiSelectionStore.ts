import {type IWithIdentity}             from "@leight/query";
import {createStore}                    from "@leight/store";
import {isEmpty}                        from "@leight/utils";
import {type IMultiSelectionStore}      from "../api/IMultiSelectionStore";
import {type IMultiSelectionStoreProps} from "../api/IMultiSelectionStoreProps";

export interface ICreateMultiSelectionStoreProps {
    name: string;
}

export const createMultiSelectionStore = <TItem extends IWithIdentity>(
    {
        name,
    }: ICreateMultiSelectionStoreProps
): IMultiSelectionStore<TItem> => {
    return createStore<IMultiSelectionStoreProps<TItem>>({
        state: () => (set, get) => ({
            items:     {},
            selection: {},
            select(item): void {
                set(state => ({
                    selection: {
                        ...state.selection,
                        [item.id]: item,
                    },
                }));
            },
            deselect(item): void {
                set(state => {
                    const selection = state.selection;
                    delete selection[item.id];
                    return {selection};
                });
            },
            isSelected(item): boolean {
                return !!get().selection[item.id];
            },
            toggle(item): void {
                const $items = get().selection;
                const $item = $items[item.id];
                $items[item.id] = item;
                if ($item) {
                    delete $items[item.id];
                }
                set({
                    selection: $items,
                });
            },
            clear() {
                set({
                    items:     {},
                    selection: {}
                });
            },
            commit() {
                set(state => ({
                    items: {
                        ...state.selection,
                    }
                }));
            },
            cancel() {
                set({selection: {}});
            },
            isSelection() {
                return !isEmpty(get().selection);
            },
        }),
        name,
    });
};
