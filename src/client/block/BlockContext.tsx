import {IBlockContext} from "@leight-core/api";
import {
	useContext,
	useOptionalContext
}                      from "@leight-core/client";
import {createContext} from "react";

export const BlockContext = createContext<IBlockContext>(null as unknown as IBlockContext);

export const useBlockContext         = () => useContext<IBlockContext>(BlockContext, "BlockContext");
export const useOptionalBlockContext = () => useOptionalContext<IBlockContext>(BlockContext as any);
