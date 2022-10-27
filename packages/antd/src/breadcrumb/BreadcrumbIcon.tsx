import {Translate} from "@leight/ui";
import {
    Space,
    SpaceProps
}                  from "antd";
import {
    FC,
    ReactNode
}                  from "react";

export interface IBreadcrumbIconProps extends Partial<SpaceProps> {
    icon?: ReactNode;
    label?: string | ReactNode;
}

export const BreadcrumbIcon: FC<IBreadcrumbIconProps> = ({icon, label, ...props}) => {
    return <Space size={"small"} {...props}>
        {icon}
        {<Translate text={label}/>}
    </Space>;
};
