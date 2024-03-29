import {IWithIdentity} from "@leight/query";
import {IStoreProps}   from "@leight/store";

export type IMultiSelectionStoreProps<TItem extends IWithIdentity> = IStoreProps<{
    items: Record<string, TItem>;
    selection: Record<string, TItem>;
    /**
     * Set currently selected item
     */
    commit(): void;
    cancel(): void;
    select(item: TItem): void;
    deselect(item: TItem): void;
    toggle(item: TItem): void;
    clear(): void;
    /**
     * Checks if the given item is selected (by an ID)
     */
    isSelected(item: TItem): boolean;
    isSelection(): boolean;
}>;
