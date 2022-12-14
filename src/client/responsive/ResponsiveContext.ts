import {
    contextFactory,
    IResponsiveContext
} from "@leight-core/viv";

export const [
                 ResponsiveContext,
                 useResponsiveContext,
                 useOptionalResponsiveContext,
             ] = contextFactory<IResponsiveContext>("ResponsiveContext");

export const useIsMobile  = () => useResponsiveContext().isMobile();
export const useIsBrowser = () => useResponsiveContext().isBrowser();
export const useIsTablet  = () => useResponsiveContext().isTablet();
