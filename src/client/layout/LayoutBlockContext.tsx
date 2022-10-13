import {
    IBlockContext,
    useContext
}                      from "@leight-core/viv";
import {createContext} from "react";

export const LayoutBlockContext = createContext<IBlockContext>(null as unknown as IBlockContext);

export const useLayoutBlockContext = () => useContext<IBlockContext>(LayoutBlockContext, "LayoutBlockContext");
