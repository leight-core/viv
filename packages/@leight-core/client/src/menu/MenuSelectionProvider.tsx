import {FC, PropsWithChildren, useEffect, useState} from "react";
import {MenuSelectionContext} from "./MenuContext";

export type IMenuSelectionProviderProps = PropsWithChildren<{
	defaultSelection?: string[];
}>;

export const MenuSelectionProvider: FC<IMenuSelectionProviderProps> = ({defaultSelection = [], ...props}) => {
	const [selection, setSelection] = useState<string[]>(defaultSelection);
	return <MenuSelectionContext.Provider
		value={{
			selection,
			useSelection: selection => {
				useEffect(() => {
					const id = setTimeout(() => setSelection(selection), 0);
					return () => clearTimeout(id);
				}, selection);
			}
		}}
		{...props}
	/>;
};
