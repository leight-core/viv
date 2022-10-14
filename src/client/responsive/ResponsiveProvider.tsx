import {
    IProviderChildren,
    IResponsiveContext,
    ResponsiveContext,
    withProviderChildren
} from "@leight-core/viv";
import {
    FC,
    useMemo
} from "react";
import {
    isBrowser as isCoolBrowser,
    isMobile as isCoolMobile,
    isTablet as isCoolTablet
} from "react-device-detect";

export interface IResponsiveProviderProps {
    isBrowser?: () => boolean;
    isMobile?: () => boolean;
    isTablet?: () => boolean;
    children?: IProviderChildren<IResponsiveContext>;
}

export const ResponsiveProvider: FC<IResponsiveProviderProps> = ({isBrowser, isMobile, isTablet, children}) => {
    const context = useMemo<IResponsiveContext>(() => {
        isBrowser = isBrowser || (() => isCoolBrowser || isCoolTablet);
        isMobile  = isMobile || (() => isCoolMobile && !isCoolTablet);
        isTablet  = isTablet || (() => isCoolTablet);
        return {
            isBrowser,
            isMobile,
            isTablet,
        };
    }, []);
    return <ResponsiveContext.Provider
        value={context}
    >
        {withProviderChildren(children, ResponsiveContext)}
    </ResponsiveContext.Provider>;
};
