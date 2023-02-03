import {ISelection, ISelectionContext, ISelectionType} from "@leight-core/api";
import {ReactNode, useEffect, useRef, useState} from "react";
import {isCallable} from "@leight/utils";
import {SelectionContext} from "./SelectionContext";

export interface ISelectionProviderProps<TSelection = any> {
	/**
	 * Selection type.
	 */
	type?: ISelectionType;
	/**
	 * Default pre-set selection; could be overridden by a user. Apply selection prop takes precedence.
	 */
	defaultSelection?: Record<string, TSelection>;
	/**
	 * Apply the given selection all the times (regardless of values set by a user)
	 */
	applySelection?: Record<string, TSelection>;

	/**
	 * Default selection handler.
	 * @param selection
	 */
	onSelection?(selection: ISelection<TSelection>): void;

	children?: ReactNode | ((selectionContext: ISelectionContext<TSelection>) => ReactNode);
}

export function SelectionProvider<TSelection, >(
	{
		type = "single",
		defaultSelection,
		applySelection,
		onSelection,
		children
	}: ISelectionProviderProps<TSelection>) {
	const [$default, $setDefault] = useState<Record<string, TSelection>>({...defaultSelection, ...applySelection});
	const [$selection, $setSelection] = useState<Record<string, TSelection>>({...defaultSelection, ...applySelection});
	const onSelectionEvents = useRef<((event: ISelection<TSelection>) => void)[]>(onSelection ? [onSelection] : []);
	const selectionRef = useRef<Record<string, TSelection>>($selection);
	const setSelection: (callback: (prev: Record<string, TSelection>) => Record<string, TSelection>) => void = prev => {
		/**
		 * Used as a hack just to force updating components using SelectionContext.
		 */
		$setSelection(selectionRef.current = prev(selectionRef.current));
	};

	useEffect(() => {
		setSelection(() => ({...defaultSelection, ...applySelection}));
	}, [JSON.stringify(defaultSelection)]);
	useEffect(() => {
		setSelection(() => ({...defaultSelection, ...applySelection}));
	}, [JSON.stringify(applySelection)]);

	const context: ISelectionContext<TSelection> = {
		type,
		isSelected: id => !!selectionRef.current[id],
		asSelection: () => selectionRef.current,
		toSelection: () => Object.keys(selectionRef.current),
		toItems: () => Object.values(selectionRef.current),
		select: (id, $selection, select) => {
			setSelection(prev => {
				const $prev = {...prev};
				const $select = select === undefined ? !$prev[id] : select;
				if (type === "single") {
					return $select ? {[id]: $selection} : {};
				}
				$prev[id] = $selection;
				!$select && (delete $prev[id]);
				return $prev;
			});
		},
		item: (item, $select) => context.select(item.id, item, $select),
		items: (items, $select) => items.map(item => context.select(item.id, item, $select)),
		isSelectedItem: item => context.isSelected(item.id),
		isEmpty: () => !context.toSelection().length,
		toSingle: () => {
			if (context.isEmpty()) {
				throw new Error("Selection is empty!");
			}
			return context.toSelection()[0] as string;
		},
		onSelection: callback => onSelectionEvents.current.push(callback),
		selection: () => {
			const items = context.toSelection().reduce((prev, current) => ({
				...prev,
				[current]: selectionRef.current[current]
			}), {});
			return {
				isEmpty: context.isEmpty(),
				single: (() => {
					try {
						return selectionRef.current[context.toSingle()];
					} catch (e) {
						// swallow "Selection Empty" error
						return undefined;
					}
				})(),
				selected: context.toSelection(),
				selection: Object.values(items) as TSelection[],
				items,
			};
		},
		toSingleItem: () => selectionRef.current[context.toSingle()] as TSelection,
		handleSelection: () => {
			const selection = context.selection();
			onSelectionEvents.current.map(callback => callback(selection));
			$setDefault($selection);
		},
		clear: () => {
			setSelection(() => ({}));
			$setDefault(() => ({}));
		},
		defaults: items => {
			context.reset();
			$setDefault(items.reduce((prev, current) => {
				return {...prev, [current.id]: current};
			}, {}));
			context.items(items, true);
		},
		reset: () => setSelection(() => $default),
	};

	return <SelectionContext.Provider
		value={context}
	>
		{isCallable(children) ?
			<SelectionContext.Consumer>{children}</SelectionContext.Consumer> : children}
	</SelectionContext.Provider>;
}
