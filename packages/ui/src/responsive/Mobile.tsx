import {useIsMobile} from "@leight/ui";
import {
    FC,
    PropsWithChildren,
    ReactNode
}                    from "react";

export type IMobileProps = PropsWithChildren<{
    fallback?: () => ReactNode;
    force?: boolean;
}>;

/**
 * Render children only on mobile (using Responsive context).
 * @param force
 * @param children
 * @param fallback
 * @constructor
 */
export const Mobile: FC<IMobileProps> = ({force = false, children, fallback = () => null}) => {
    return <>{useIsMobile() || force ? children : fallback()}</>;
};
