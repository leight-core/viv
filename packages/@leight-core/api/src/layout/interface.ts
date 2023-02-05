export interface ISiderCollapseContext {
	readonly disabled: boolean;
	/**
	 * Is menu collapsed (if applicable for the current layout).
	 */
	readonly collapsed: boolean;

	setDisabled(disabled?: boolean): void;

	/**
	 * Hook for collapsing a menu.
	 */
	useCollapse(collapsed?: boolean, restore?: boolean): void;

	/**
	 * Direct state change for menu collapse.
	 */
	setCollapsed(collapsed: boolean): void;
}
