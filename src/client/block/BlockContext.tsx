import {
    createContext,
    IBlockContext,
    useContext,
    useOptionalContext
} from "@leight-core/viv";

export const BlockContext = createContext<IBlockContext>();

export const useBlockContext         = () => useContext<IBlockContext>(BlockContext, "BlockContext");
export const useOptionalBlockContext = () => useOptionalContext<IBlockContext>(BlockContext);
