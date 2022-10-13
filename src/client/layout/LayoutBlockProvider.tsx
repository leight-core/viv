import {
	BlockContextClass,
	IBlockProviderProps,
	LayoutBlockContext
}                   from "@leight-core/client";
import {isCallable} from "@leight-core/utils";
import {
	FC,
	ReactNode,
	useState
}                   from "react";

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
		{isCallable(children) ? <LayoutBlockContext.Consumer>{children as any}</LayoutBlockContext.Consumer> : children as ReactNode}
	</LayoutBlockContext.Provider>;
};
