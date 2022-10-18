import {useIsTablet} from "@leight/viv";
import {
    FC,
    PropsWithChildren,
    ReactNode
}                    from "react";

export type ITabletContentProps = PropsWithChildren<{
    fallback?: ReactNode | null;
}>;

export const TabletContent: FC<ITabletContentProps> = ({children, fallback = null}) => {
    return <>{useIsTablet() ? children : fallback}</>;
};
