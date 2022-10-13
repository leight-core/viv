import {
    IResponsiveContext,
    useContext
}                      from "@leight-core/viv";
import {createContext} from "react";

export const ResponsiveContext = createContext(null as unknown as IResponsiveContext);

export const useResponsiveContext = () => useContext(ResponsiveContext, "ResponsiveContext");

export const useIsMobile  = () => useResponsiveContext().isMobile();
export const useIsBrowser = () => useResponsiveContext().isBrowser();
export const useIsTablet  = () => useResponsiveContext().isTablet();
