import {isCallable}         from "@leight/utils";
import {
	FC,
	useState
}                           from "react";
import {
	BlockContextClass,
	IBlockProviderProps
}                           from "../block";
import {LayoutBlockContext} from "./LayoutBlockContext";

export interface ILayoutBlockProviderProps extends Partial<IBlockProviderProps> {
	/**
	 * Default blocking state; "false" if not specified.
	 */
	locked?: boolean;
}

export const LayoutBlockProvider: FC<ILayoutBlockProviderProps> = ({locked = false, children}) => {
	return <LayoutBlockContext.Provider
		value={new BlockContextClass(useState<boolean>(locked), useState<number>(0))}
	>
		{isCallable(children) ? <LayoutBlockContext.Consumer>{children}</LayoutBlockContext.Consumer> : children}
	</LayoutBlockContext.Provider>;
};
