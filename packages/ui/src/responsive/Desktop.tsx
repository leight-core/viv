import {useIsDesktop} from "@leight/ui";
import {
    FC,
    PropsWithChildren,
    ReactNode
}                     from "react";

export type IDesktopProps = PropsWithChildren<{
    fallback?: () => ReactNode;
    force?: boolean;
}>;

/**
 * Render children only on desktop (using Responsive context).
 * @param force
 * @param children
 * @param fallback
 * @constructor
 */
export const Desktop: FC<IDesktopProps> = ({force = false, children, fallback = () => null}) => {
    return <>{useIsDesktop() || force ? children : fallback()}</>;
};
