import {FC, PropsWithChildren, ReactNode} from "react";
import {useIsBrowser} from "./ResponsiveContext";

export type IBrowserContentProps = PropsWithChildren<{
	fallback?: ReactNode | null;
	force?: boolean;
}>;

export const BrowserContent: FC<IBrowserContentProps> = ({force = false, children, fallback = null}) => {
	return <>{useIsBrowser() || force ? children : fallback}</>;
};
