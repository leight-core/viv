import {
    Context,
    IResponsiveContext
} from "@leight/ui";

export const [
                 ResponsiveContext,
                 useResponsiveContext,
                 useOptionalResponsiveContext,
             ] = Context.factory<IResponsiveContext>("ResponsiveContext");

export const useIsMobile  = () => useResponsiveContext().isMobile();
export const useIsDesktop = () => useResponsiveContext().isDesktop();
export const useIsTablet  = () => useResponsiveContext().isTablet();
