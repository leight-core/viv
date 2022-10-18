import {Space} from "antd";
import {
    ComponentProps,
    FC
}              from "react";

export interface IButtonBarProps extends Partial<ComponentProps<typeof Space>> {
}

export const ButtonBar: FC<IButtonBarProps> = props => {
    return <Space
        size={0}
        align={"center"}
        direction={"horizontal"}
        {...props}
    />;
};
