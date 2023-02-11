import {IBlockContext} from "@leight-core/api";
import {createContext} from "react";
import {useContext}    from "../context";

export const LayoutBlockContext = createContext<IBlockContext>(null as unknown as IBlockContext);

export const useLayoutBlockContext = () => useContext<IBlockContext>(LayoutBlockContext, "LayoutBlockContext");
