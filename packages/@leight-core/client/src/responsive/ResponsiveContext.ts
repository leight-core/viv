import {IResponsiveContext} from "@leight-core/api";
import {createContext}      from "react";
import {useContext}         from "../context";

export const ResponsiveContext = createContext(null as unknown as IResponsiveContext);

export const useResponsiveContext = () => useContext(ResponsiveContext, "ResponsiveContext");

export const useIsMobile  = () => useResponsiveContext().isMobile();
export const useIsBrowser = () => useResponsiveContext().isBrowser();
export const useIsTablet  = () => useResponsiveContext().isTablet();
