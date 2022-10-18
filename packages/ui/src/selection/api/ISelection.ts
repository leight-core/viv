export interface ISelection<TSelection> {
    /**
     * Single (if any) selected item.
     */
    single: TSelection | undefined;
    /**
     * Selected IDs.
     */
    selected: string[];
    /**
     * Selected items indexed by an ID.
     */
    items: Record<string, TSelection>;
    /**
     * Just an array of selected items.
     */
    selection: TSelection[];
    /**
     * Quite talkative, isn't?
     */
    isEmpty: boolean;
}
