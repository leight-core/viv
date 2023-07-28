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

export interface IMenuLabelProps extends ComponentProps<typeof Menu.Label> {
    withTranslation: IWithTranslation;
}

export const MenuLabel: FC<IMenuLabelProps> = (
    {
        withTranslation,
        ...props
    }) => {
    return <Menu.Label
        {...props}
    >
        <Translation {...withTranslation}/>
    </Menu.Label>;
};
