"use client";

import {
    type IWithTranslation,
    Translation
}                  from "@leight/i18n";
import {
    type IHrefProps,
    linkTo
}                  from "@leight/utils";
import {Tabs}      from "@mantine/core";
import {useRouter} from "next/router";
import {
    type FC,
    type ReactNode
}                  from "react";
import {WithIcon}  from "./WithIcon";

export interface ITabLinkMenuItem {
    href: IHrefProps;
    icon?: ReactNode;
    withTranslation?: IWithTranslation;
}

export interface ITabLinkMenuProps {
    items: ITabLinkMenuItem[];
    active?: string;
}

export const TabLinkMenu: FC<ITabLinkMenuProps> = (
    {
        active,
        items
    }) => {
    const router = useRouter();
    return (
        <Tabs
            defaultValue={active || router.pathname}
            onTabChange={(href) => href && router.push(href)}
        >
            <Tabs.List>
                {items.map(({
                                icon,
                                href,
                                withTranslation
                            }) => (
                    <Tabs.Tab
                        key={href.href}
                        icon={<WithIcon icon={icon}/>}
                        value={linkTo(href)}
                    >
                        {withTranslation && (
                            <Translation {...withTranslation} />
                        )}
                    </Tabs.Tab>
                ))}
            </Tabs.List>
        </Tabs>
    );
};
