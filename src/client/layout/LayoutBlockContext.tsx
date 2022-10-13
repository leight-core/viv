import {IBlockContext} from "@leight-core/api";
import {useContext}    from "@leight-core/client";
import {createContext} from "react";

export const LayoutBlockContext = createContext<IBlockContext>(null as unknown as IBlockContext);

export const useLayoutBlockContext = () => useContext<IBlockContext>(LayoutBlockContext, "LayoutBlockContext");
