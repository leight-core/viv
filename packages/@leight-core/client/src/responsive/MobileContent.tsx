import {
	FC,
	PropsWithChildren,
	ReactNode
}                    from "react";
import {useIsMobile} from "./ResponsiveContext";

export type IMobileContentProps = PropsWithChildren<{
	fallback?: ReactNode | null;
	force?: boolean;
}>;

export const MobileContent: FC<IMobileContentProps> = ({force = false, children, fallback = null}) => {
	return <>{useIsMobile() || force ? children : fallback}</>;
};
