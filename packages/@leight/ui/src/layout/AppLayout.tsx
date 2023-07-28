"use client";

import {
    LocaleLink,
    useLocaleRouter
}                                 from "@leight/i18n";
import {
    ActionIcon,
    Box,
    Group,
    Header,
    LoadingOverlay
}                                 from "@mantine/core";
import {IconLogout}               from "@tabler/icons-react";
import Image                      from "next/image";
import {
    type ComponentProps,
    type FC,
    type PropsWithChildren,
    ReactNode,
    useEffect
}                                 from "react";
import {type IWithLogoutMutation} from "../api/IWithLogoutMutation";
import {BlockStore}               from "../store/BlockStore";

export interface IAppLayoutProps extends PropsWithChildren {
    logo: ComponentProps<typeof Image>["src"];
    homeUrl?: string;
    publicUrl?: string;
    logoutMutation?: IWithLogoutMutation;
    /**
     * Center part of the layout (header)
     */
    center?: ReactNode;
}

/**
 * General layout used inside app when a user is logged-in.
 */
export const AppLayout: FC<IAppLayoutProps> = (
    {
        logo,
        homeUrl = "/root",
        publicUrl = "/public",
        logoutMutation,
        center,
        children
    }) => {
    const logout = logoutMutation?.useMutation();
    const block = BlockStore.use$();
    const router = useLocaleRouter();
    useEffect(() => {
        block?.unblock();
    }, []);
    return <>
        <Box>
            <LoadingOverlay
                loader={<></>}
                visible={block?.isBlock || false}
            />
            <Header height={72} px={"md"}>
                <Group position={"apart"} sx={{height: "100%"}}>
                    <Group>
                        <LocaleLink href={homeUrl}>
                            <Image
                                priority={true}
                                width={200}
                                height={64}
                                alt={"logo"}
                                src={logo}
                            />
                        </LocaleLink>
                        {center}
                    </Group>
                    {logout && <Group>
                        <ActionIcon
                            size={"xl"}
                            onClick={() => {
                                block?.block();
                                logout.mutate(undefined, {
                                    onSuccess: () => router.push({
                                        href: publicUrl,
                                    }),
                                });
                            }}
                        >
                            <IconLogout/>
                        </ActionIcon>
                    </Group>}
                </Group>
            </Header>
        </Box>
        {children}
    </>;
};
