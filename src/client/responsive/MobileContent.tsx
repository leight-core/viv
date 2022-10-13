import {useIsMobile} from "@leight-core/viv";
import {
    FC,
    PropsWithChildren,
    ReactNode
}                    from "react";

export type IMobileContentProps = PropsWithChildren<{
    fallback?: ReactNode | null;
    force?: boolean;
}>;

export const MobileContent: FC<IMobileContentProps> = ({force = false, children, fallback = null}) => {
    return <>{useIsMobile() || force ? children : fallback}</>;
};
