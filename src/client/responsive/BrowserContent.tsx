import {useIsBrowser} from "@leight-core/client";
import {
	FC,
	PropsWithChildren,
	ReactNode
}                     from "react";

export type IBrowserContentProps = PropsWithChildren<{
	fallback?: ReactNode | null;
	force?: boolean;
}>;

export const BrowserContent: FC<IBrowserContentProps> = ({force = false, children, fallback = null}) => {
	return <>{force || useIsBrowser() ? children : fallback}</>;
};
