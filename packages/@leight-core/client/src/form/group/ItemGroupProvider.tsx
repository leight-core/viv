import {FC, PropsWithChildren} from "react";
import {ItemGroupContext} from "./ItemGroupContext";

export type IItemGroupProviderProps = PropsWithChildren<{
	prefix: (string | number)[];
	translation?: string;
}>;

export const ItemGroupProvider: FC<IItemGroupProviderProps> = ({prefix, translation, ...props}) => {
	return <ItemGroupContext.Provider
		value={{
			prefix,
			translation,
		}}
		{...props}
	/>;
};
