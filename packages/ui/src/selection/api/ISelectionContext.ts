import {
    ISelection,
    ISelectionType
} from "@leight/ui";

export interface ISelectionContext<TSelection> {
    readonly type: ISelectionType;

    /**
     * Handle selection with the provided id.
     */
    select(id: string, selection: TSelection, select?: boolean): void;

    /**
     * Handle selection with the provided item; id is taken from that item.
     */
    item(item: TSelection & { id: string }, select?: boolean): void;

    items(items: (TSelection & { id: string })[], select?: boolean): void;

    /**
     * Update default selected items when selection is reset.
     * @param items
     */
    defaults(items: (TSelection & { id: string })[]): void;

    /**
     * Return object with all selection stuff.
     */
    selection(): ISelection<TSelection>;

    /**
     * Tells if an item with the given id has been selected.
     */
    isSelected(id: string): boolean;

    isSelectedItem(item: TSelection & { id: string }): boolean;

    /**
     * Return a simple object with keys/values of the selected items.
     */
    asSelection(): { [index in string]: TSelection; };

    /**
     * Return an array of selected ids.
     */
    toSelection(): string[];

    /**
     * Return an array of selected items.
     */
    toItems(): TSelection[];

    /**
     * Return just a single selected id. If there is no selection, error is thrown.
     */
    toSingle(): string;

    /**
     * Return single selected item. IF there is no selection, error is thrown.
     */
    toSingleItem(): TSelection;

    /**
     * Is the list empty?
     */
    isEmpty(): boolean;

    /**
     * Calls the on selection internal event. Should be called for example by OK button calls or so.
     */
    handleSelection(): void;

    /**
     * Add selection event handler.
     */
    onSelection(callback: (event: ISelection<TSelection>) => void): void;

    /**
     * Clear all selection.
     */
    clear(): void;

    /**
     * When selection changes are made, this will revert selection to original
     * selection state (so with apply or default selection).
     */
    reset(): void;
}
