import {ISiderCollapseContext} from "@leight-core/api";
import {createContext} from "react";
import {useContext, useOptionalContext} from "../context";

export const SiderCollapseContext = createContext<ISiderCollapseContext>(null as any);

export const useSiderCollapseContext = () => useContext<ISiderCollapseContext>(SiderCollapseContext, "SiderCollapseContext");
export const useOptionalSiderCollapseContext = () => useOptionalContext<ISiderCollapseContext>(SiderCollapseContext as any);
