import {FC, PropsWithChildren} from "react";
import {isBrowser as isCoolBrowser, isMobile as isCoolMobile, isTablet as isCoolTablet} from "react-device-detect";
import {ResponsiveContext} from "./ResponsiveContext";

export type IResponsiveProviderProps = PropsWithChildren<{
	isBrowser?: () => boolean;
	isMobile?: () => boolean;
	isTablet?: () => boolean;
}>;

export const ResponsiveProvider: FC<IResponsiveProviderProps> = ({isBrowser, isMobile, isTablet, ...props}) => {
	isBrowser = isBrowser || (() => isCoolBrowser || isCoolTablet);
	isMobile = isMobile || (() => isCoolMobile && !isCoolTablet);
	isTablet = isTablet || (() => isCoolTablet);
	return <ResponsiveContext.Provider
		value={{
			isBrowser,
			isMobile,
			isTablet,
		}}
		{...props}
	/>;
};
