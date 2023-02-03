import {IBlockContext} from "@leight-core/api";
import {isCallable} from "@leight/utils";
import {FC, ReactNode, useState} from "react";
import {BlockContext} from "./BlockContext";
import {BlockContextClass} from "./BlockContextClass";

export interface IBlockProviderProps {
	/**
	 * Default blocking state; "false" if not specified.
	 */
	locked?: boolean;
	children?: ReactNode | ((blockContext: IBlockContext) => ReactNode);
}

export const BlockProvider: FC<IBlockProviderProps> = ({locked = false, children}) => {
	return <BlockContext.Provider
		value={new BlockContextClass(useState<boolean>(locked), useState<number>(0), locked)}
	>
		{isCallable(children) ?
			<BlockContext.Consumer>{children}</BlockContext.Consumer> : children}
	</BlockContext.Provider>;
};
