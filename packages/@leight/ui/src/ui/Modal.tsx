"use client";

import {
    type IWithTranslation,
    Translation
}                      from "@leight/i18n";
import {isString}      from "@leight/utils";
import {
    Divider,
    Group,
    Modal as CoolModal
}                      from "@mantine/core";
import {
    type ComponentProps,
    type FC,
    type ReactNode
}                      from "react";
import {BlockProvider} from "../store/BlockStore";
import {ModalStore}    from "../store/ModalStore";
import {WithIcon}      from "./WithIcon";

export interface IModalProps extends Omit<ComponentProps<typeof CoolModal>, "opened" | "onClose"> {
    modalId: string;
    icon?: ReactNode;
    withTranslation?: IWithTranslation;
}

export const Modal: FC<IModalProps> = (
    {
        modalId,
        icon,
        withTranslation,
        title,
        children,
        ...props
    }) => {
    const {
        isOpened,
        close
    } = ModalStore.use(({
                            isOpened,
                            close
                        }) => ({
        isOpened,
        close
    }));
    return <CoolModal
        opened={isOpened[modalId] ?? false}
        onClose={() => close(modalId)}
        title={<Group spacing={4}>
            <WithIcon icon={icon}/>
            {isString(title) ? <Translation {...withTranslation} withLabel={title}/> : title}
        </Group>}
        size={"lg"}
        zIndex={500}
        {...props}
    >
        <Divider/>
        <BlockProvider>
            {children}
        </BlockProvider>
    </CoolModal>;
};
