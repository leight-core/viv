import {useIsTablet} from "@leight/ui";
import {
    FC,
    PropsWithChildren,
    ReactNode
}                    from "react";

export type ITabletProps = PropsWithChildren<{
    fallback?: () => ReactNode;
    force?: boolean;
}>;

/**
 * Render children only on tablet (using Responsive context).
 * @param force
 * @param children
 * @param fallback
 * @constructor
 */
export const Tablet: FC<ITabletProps> = ({force = false, children, fallback = () => null}) => {
    return <>{useIsTablet() || force ? children : fallback()}</>;
};
