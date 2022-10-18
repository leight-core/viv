import {
    IMenuProps,
    Menu
}           from "@leight/viv";
import {FC} from "react";

export interface IHorizontalMenuProps extends Partial<IMenuProps> {
}

export const HorizontalMenu: FC<IHorizontalMenuProps> = props => {
    return <Menu
        style={{border: "none"}}
        mode={"horizontal"}
        {...props}
    />;
};
