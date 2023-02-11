export interface IMenuSelectionContext {
	/**
	 * Currently selected menu items.
	 */
	readonly selection: string[];

	/**
	 * An effect to select menu item.
	 *
	 * @param select
	 */
	useSelection(selection: string[]): void;
}
