"use client";

import {
    type IWithTranslation,
    Translation
}             from "@leight/i18n";
import {Menu} from "@mantine/core";
import {
    type ComponentProps,
    type FC
}             from "react";

export interface IMenuItemProps extends ComponentProps<typeof Menu.Item<"button">> {
    withTranslation: IWithTranslation;
}

export const MenuItem: FC<IMenuItemProps> = (
    {
        withTranslation,
        ...props
    }) => {
    return <Menu.Item
        {...props}
    >
        <Translation {...withTranslation}/>
    </Menu.Item>;
};
