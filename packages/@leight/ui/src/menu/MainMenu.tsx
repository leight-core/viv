"use client";

import {
    type IWithTranslation,
    Link,
    Translation
}                         from "@leight/i18n";
import {type ILink}       from "@leight/utils";
import {
    createStyles,
    Group
}                         from "@mantine/core";
import {usePathname}      from "next/navigation";
import {WithIcon}         from "../ui/WithIcon";
import {switchScheme}     from "../utils/switchScheme";
import {withPrimaryColor} from "../utils/withPrimaryColor";

const useStyles = createStyles((theme) => ({
    link:       {
        display:        "flex",
        alignItems:     "center",
        height:         "50%",
        margin:         theme.spacing.xs,
        paddingLeft:    theme.spacing.md,
        paddingRight:   theme.spacing.md,
        textDecoration: "none",
        fontWeight:     500,
        fontSize:       theme.fontSizes.md,
        color:          switchScheme(theme, theme.white, theme.black),
        "&:hover":      {
            borderBottom:      "1px solid",
            borderBottomColor: switchScheme(
                theme,
                theme.colors.dark[4],
                withPrimaryColor(theme),
            ),
        },
    },
    linkActive: {
        "&, &:hover": {
            fontWeight:        "bold",
            borderBottom:      "2px solid",
            borderBottomColor: switchScheme(
                theme,
                theme.colors.dark[4],
                withPrimaryColor(theme),
            ),
        },
    },
}));

export type IMainMenuLinks = Record<string, ILink>;

export interface IMainMenuProps<TLinks extends IMainMenuLinks> {
    withTranslation?: IWithTranslation;
    links: TLinks;
    active?: keyof TLinks;
}

export const MainMenu = <TLinks extends IMainMenuLinks>(
    {
        links,
        active,
        withTranslation,
    }: IMainMenuProps<TLinks>) => {
    const pathname = usePathname();
    const {
        classes,
        cx
    } = useStyles();
    const $active = (active || pathname) as string;
    return <Group
        sx={{height: "100%"}}
        spacing={0}
    >
        {Object.entries(links).map(([id, link]) => (
            <Link
                key={id}
                href={link.href}
                className={cx(classes.link, {
                    [classes.linkActive]: $active.includes(link.href),
                })}
            >
                <Group
                    position={"apart"}
                >
                    <WithIcon
                        icon={link.icon}
                    />
                    <Translation
                        {...withTranslation}
                        withLabel={link.label || id}
                    />
                </Group>
            </Link>
        ))}
    </Group>;
};
