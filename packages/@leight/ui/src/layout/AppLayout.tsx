"use client";

import {useRouter}                from "@leight/i18n";
import {
    ActionIcon,
    Box,
    Group,
    Header,
    LoadingOverlay
}                                 from "@mantine/core";
import {IconLogout}               from "@tabler/icons-react";
import Image                      from "next/image";
import Link                       from "next/link";
import {
    type ComponentProps,
    type FC,
    type PropsWithChildren,
    useEffect
}                                 from "react";
import {type IWithLogoutMutation} from "../api/IWithLogoutMutation";
import {BlockStore}               from "../store/BlockStore";

export interface IAppLayoutProps extends PropsWithChildren {
    logo: ComponentProps<typeof Image>["src"];
    homeUrl?: string;
    publicUrl?: string;
    logoutMutation?: IWithLogoutMutation;
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
        children
    }) => {
    const logout = logoutMutation?.useMutation();
    const block = BlockStore.use$();
    const router = useRouter();
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
                    <Link href={`/${router.locale ?? ""}${homeUrl ?? ""}`}>
                        <Image
                            priority={true}
                            width={200}
                            height={64}
                            alt={"logo"}
                            src={logo}
                        />
                    </Link>
                    {logout && <Group>
                        <ActionIcon
                            size={"xl"}
                            onClick={() => {
                                block?.block();
                                logout.mutate(undefined, {
                                    onSuccess: () => router.push(publicUrl),
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
