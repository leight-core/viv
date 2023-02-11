import {
	FC,
	PropsWithChildren,
	useEffect,
	useState
}                             from "react";
import {SiderCollapseContext} from "./SiderCollapseContext";

export type ISiderCollapseProviderProps = PropsWithChildren<{
	defaultCollapsed?: boolean;
	defaultDisabled?: boolean;
}>;

export const SiderCollapseProvider: FC<ISiderCollapseProviderProps> = (
	{
		defaultCollapsed = false,
		defaultDisabled = false,
		...props
	}) => {
	const [disabled, setDisabled]   = useState<boolean>(defaultDisabled);
	const [collapsed, setCollapsed] = useState<boolean>(defaultCollapsed);
	return <SiderCollapseContext.Provider
		value={{
			disabled,
			setDisabled: (disabled = true) => setDisabled(disabled),
			collapsed,
			useCollapse: (collapsed, restore) => {
				useEffect(() => {
					if (collapsed === undefined) {
						return () => {
							// nope
						};
					}
					setCollapsed(collapsed);
					return () => {
						restore && setCollapsed(!collapsed);
					};
				}, [collapsed]);
			},
			setCollapsed,
		}}
		{...props}
	/>;
};
