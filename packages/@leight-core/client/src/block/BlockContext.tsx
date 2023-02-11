import {IBlockContext} from "@leight-core/api";
import {createContext} from "react";
import {
	useContext,
	useOptionalContext
}                      from "../context";

export const BlockContext = createContext<IBlockContext>(null as unknown as IBlockContext);

export const useBlockContext         = () => useContext<IBlockContext>(BlockContext, "BlockContext");
export const useOptionalBlockContext = () => useOptionalContext<IBlockContext>(BlockContext as any);
