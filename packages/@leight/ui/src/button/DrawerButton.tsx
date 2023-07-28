"use client";

import {
    type IWithTranslation,
    Translation
}                    from "@leight/i18n";
import {Button}      from "@mantine/core";
import {
    type ComponentProps,
    type FC
}                    from "react";
import {DrawerStore} from "../store/DrawerStore";

export interface IDrawerButtonProps extends Omit<ComponentProps<typeof Button<"button">>, "children"> {
    drawerId: string;
    withTranslation?: IWithTranslation;
    label?: string;
}

export const DrawerButton: FC<IDrawerButtonProps> = (
    {
        drawerId,
        withTranslation,
        label,
        ...props
    }) => {
    const {open} = DrawerStore.use(({open}) => ({open}));
    return <Button
        {...props}
        onClick={() => open(drawerId)}
    >
        <Translation {...withTranslation} label={"drawer"} withLabel={label}/>
    </Button>;
};
