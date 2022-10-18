import {
    Context,
    IProviderChildren,
    IResponsiveContext,
    ResponsiveContext
}                from "@leight/ui";
import {FC,}     from "react";
import {
    isDesktop as isCoolDesktop,
    isMobile as isCoolMobile,
    isTablet as isCoolTablet
}                from "react-device-detect";
import {useMemo} from "use-memo-one";

export interface IResponsiveProviderProps {
    isDesktop?: () => boolean;
    isMobile?: () => boolean;
    isTablet?: () => boolean;
    children?: IProviderChildren<IResponsiveContext>;
}

export const ResponsiveProvider: FC<IResponsiveProviderProps> = ({isDesktop, isMobile, isTablet, children}) => {
    return <ResponsiveContext.Provider
        value={useMemo<IResponsiveContext>(() => {
            isDesktop = isDesktop || (() => isCoolDesktop || isCoolTablet);
            isMobile  = isMobile || (() => isCoolMobile && !isCoolTablet);
            isTablet  = isTablet || (() => isCoolTablet);
            return {
                isDesktop,
                isMobile,
                isTablet,
            };
        }, [])}
    >
        {Context.render(children, ResponsiveContext)}
    </ResponsiveContext.Provider>;
};
