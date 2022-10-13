import {IBlockContext} from "@leight-core/api";
import {
	BlockContext,
	BlockContextClass
}                      from "@leight-core/client";
import {isCallable}    from "@leight-core/utils";
import {
	FC,
	ReactNode,
	useState
}                      from "react";

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
		{isCallable(children) ? <BlockContext.Consumer>{children as any}</BlockContext.Consumer> : children as ReactNode}
	</BlockContext.Provider>;
};
