import {ISiderCollapseContext} from "@leight-core/api";
import {
	useContext,
	useOptionalContext
}                              from "@leight-core/client";
import {createContext}         from "react";

export const SiderCollapseContext = createContext<ISiderCollapseContext>(null as any);

export const useSiderCollapseContext         = () => useContext<ISiderCollapseContext>(SiderCollapseContext, "SiderCollapseContext");
export const useOptionalSiderCollapseContext = () => useOptionalContext<ISiderCollapseContext>(SiderCollapseContext as any);
