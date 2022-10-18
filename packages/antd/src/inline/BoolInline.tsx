import {
    CheckCircleTwoTone,
    CloseCircleTwoTone,
    MinusCircleTwoTone
}               from "@ant-design/icons";
import {Avatar} from "antd";
import {
    FC,
    ReactNode
}               from "react";

export interface IBoolInlineProps {
    bool?: boolean | null;
    checkIcon?: ReactNode;
    uncheckIcon?: ReactNode;
    undefinedIcon?: ReactNode;
}

export const BoolInline: FC<IBoolInlineProps> = (
    {
        bool,
        checkIcon = <CheckCircleTwoTone twoToneColor={"#71da17"}/>,
        uncheckIcon = <CloseCircleTwoTone twoToneColor={"#e26738"}/>,
        undefinedIcon = <MinusCircleTwoTone/>,
    }) => {
    return <Avatar
        size={"large"}
        style={{backgroundColor: "transparent"}}
        icon={bool !== undefined && bool !== null ? (bool ? checkIcon : uncheckIcon) : undefinedIcon}
    />;
};
