import {
    IResponsiveContext,
    ResponsiveContext
} from "@leight-core/viv";
import {
    FC,
    PropsWithChildren,
    useRef
} from "react";
import {
    isBrowser as isCoolBrowser,
    isMobile as isCoolMobile,
    isTablet as isCoolTablet
} from "react-device-detect";

export type IResponsiveProviderProps = PropsWithChildren<{
    isBrowser?: () => boolean;
    isMobile?: () => boolean;
    isTablet?: () => boolean;
}>;

export const ResponsiveProvider: FC<IResponsiveProviderProps> = ({isBrowser, isMobile, isTablet, ...props}) => {
    isBrowser     = isBrowser || (() => isCoolBrowser || isCoolTablet);
    isMobile      = isMobile || (() => isCoolMobile && !isCoolTablet);
    isTablet      = isTablet || (() => isCoolTablet);
    const context = useRef<IResponsiveContext>({
        isBrowser,
        isMobile,
        isTablet,
    });
    return <ResponsiveContext.Provider
        value={context.current}
        {...props}
    />;
};
