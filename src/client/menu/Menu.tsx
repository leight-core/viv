import {useMenuSelectionContext,} from "@leight/viv";
import {
    Menu as CoolMenu,
    MenuProps
}                                 from "antd";
import React, {FC}                from "react";

export interface IMenuProps extends Partial<MenuProps> {
}

export const Menu: FC<IMenuProps> = props => {
    return <CoolMenu
        mode={"inline"}
        selectedKeys={useMenuSelectionContext().selection}
        subMenuCloseDelay={0.35}
        {...props}
    />;
};
