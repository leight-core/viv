"use client";

import {
    useRouter,
    useTranslation
}                   from "@leight/i18n";
import {
    Box,
    Button,
    Group,
    Header,
    LoadingOverlay
}                   from "@mantine/core";
import {IconLogin}  from "@tabler/icons-react";
import {signIn}     from "next-auth/react";
import Image        from "next/image";
import Link         from "next/link";
import {
    type ComponentProps,
    type FC,
    type PropsWithChildren,
    type ReactNode,
    useEffect
}                   from "react";
import {BlockStore} from "../store/BlockStore";

export interface IPublicLayoutProps extends PropsWithChildren {
    logo: ComponentProps<typeof Image>["src"];
    homeUrl?: string;
    /**
     * If provided, user will be redirected here; defaults to next-auth signIn()
     */
    loginUrl?: string;
    /**
     * Hides login button from header
     */
    withoutLogin?: boolean;
    /**
     * Center part of the layout (header)
     */
    center?: ReactNode;
}

export const PublicLayout: FC<IPublicLayoutProps> = (
    {
        logo,
        homeUrl = "/public",
        loginUrl,
        withoutLogin = false,
        center,
        children
    }) => {
    const block = BlockStore.use$();
    const t = useTranslation("public");
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
                    {center}
                    {!withoutLogin && <Group>
                        <Button
                            leftIcon={<IconLogin/>}
                            onClick={() => loginUrl ? router.push({
                                href: loginUrl,
                            }) : signIn()}
                        >
                            {t("button.sign-in")}
                        </Button>
                    </Group>}
                </Group>
            </Header>
        </Box>
        {children}
    </>;
};
