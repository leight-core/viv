import {FC, PropsWithChildren, ReactNode} from "react";
import {useIsTablet} from "./ResponsiveContext";

export type ITabletContentProps = PropsWithChildren<{
	fallback?: ReactNode | null;
}>;

export const TabletContent: FC<ITabletContentProps> = ({children, fallback = null}) => {
	return <>{useIsTablet() ? children : fallback}</>;
};
