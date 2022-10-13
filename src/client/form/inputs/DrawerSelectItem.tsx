import {
	IMobileFormContext,
	ISelection,
	ISelectionType,
	IVisibleContext,
	IWithIdentity
}                    from "@leight-core/api";
import {
	Drawer,
	DrawerSelect,
	IDrawerProps,
	IDrawerSelectProps,
	IDrawerSelectRenderList,
	IDrawerSelectRenderLoading,
	IListLoaderRenderEmpty,
	IListLoaderRenderNothing,
	IMobileFormItemProps,
	IOfSelection,
	ISourceProviderProps,
	MobileFormItem,
	useMobileFormContext,
	useOptionalBlockContext,
	VisibleProvider
}                    from "@leight-core/client";
import {SwipeAction} from "antd-mobile";
import {AddOutline}  from "antd-mobile-icons";
import {
	ComponentProps,
	PropsWithChildren,
	ReactNode
}                    from "react";

export interface ICreateWithProps<TValues extends Record<string, any> = any> {
	formContext: IMobileFormContext<TValues>;
	visibleContext: IVisibleContext;
}

export type IDrawerSelectItemProps<TItem extends Record<string, any> & IWithIdentity = any, TOnChange = any> = PropsWithChildren<Omit<IMobileFormItemProps, "children"> & {
	render(item: TItem): ReactNode;
	/**
	 * Override internal list (CheckList is the parent control, but the rest is on this method.).
	 */
	renderList?(props: IDrawerSelectRenderList<TItem>): ReactNode;
	renderLoading?(props: IDrawerSelectRenderLoading<TItem>): ReactNode;
	renderEmpty?(props: IListLoaderRenderEmpty<TItem>): ReactNode;
	renderNothing?(props: IListLoaderRenderNothing<TItem>): ReactNode;
	sourceProviderProps: ISourceProviderProps<TItem>;
	type?: ISelectionType;
	/**
	 * Default selection (shortcut to selectionProviderProps)
	 */
	defaultSelection?: Record<string, TItem>;
	selected?: TItem;
	drawerSelectProps?: Partial<IDrawerSelectProps<TItem, TOnChange>>;
	toChange?(selection: ISelection<TItem>): TOnChange | undefined;
	toPreview(selection?: ISelection<TItem>): ReactNode;
	ofSelection(ofSelection: IOfSelection<TItem, TOnChange>): void;
	icon?: ReactNode;
	createWith?(createWithProps: ICreateWithProps): ReactNode;
	createWithDrawer?: IDrawerProps;
	onSelection?(selection: ISelection<TItem>): void;
	withFulltext?: boolean;
	/**
	 * Override placeholder key for translation (this is not translation itself).
	 */
	placeholder?: string;

}>;

export function DrawerSelectItem<TItem extends Record<string, any> & IWithIdentity = any, TOnChange = any>(
	{
		render,
		renderList,
		renderLoading,
		renderEmpty,
		renderNothing,
		sourceProviderProps,
		type = "single",
		defaultSelection,
		selected,
		drawerSelectProps,
		field,
		toChange,
		toPreview,
		ofSelection,
		icon,
		createWith,
		createWithDrawer,
		onSelection,
		withFulltext = true,
		placeholder,
		children,
		...props
	}: IDrawerSelectItemProps<TItem, TOnChange>) {
	const formContext  = useMobileFormContext();
	const blockContext = useOptionalBlockContext();

	return <VisibleProvider>
		{visibleContext => {
			const rightActions: ComponentProps<typeof SwipeAction>["rightActions"] = [];
			createWith && rightActions.push({
				key: JSON.stringify(field) + ".create", color: "primary", text: <AddOutline fontSize={24}/>, onClick: () => {
					setTimeout(() => visibleContext.show(), 150);
				}
			});
			return <>
				<VisibleProvider>
					<MobileFormItem
						field={field}
						withVisible
						rightActions={rightActions}
						disabled={blockContext?.isBlocked()}
						{...props}
					>
						<DrawerSelect
							render={render}
							renderList={renderList}
							renderLoading={renderLoading}
							renderEmpty={renderEmpty}
							renderNothing={renderNothing}
							sourceProviderProps={sourceProviderProps}
							type={type}
							defaultSelection={selected ? {[selected.id]: selected} : defaultSelection}
							toChange={toChange}
							toPreview={toPreview}
							ofSelection={ofSelection}
							icon={icon}
							onSelection={onSelection}
							withFulltext={withFulltext}
							placeholder={placeholder}
							children={children}
							{...drawerSelectProps}
						/>
					</MobileFormItem>
				</VisibleProvider>
				<Drawer
					bodyStyle={{padding: 0}}
					{...createWithDrawer}
				>
					{createWith?.({
						formContext,
						visibleContext,
					})}
				</Drawer>
			</>;
		}}
	</VisibleProvider>;
}
