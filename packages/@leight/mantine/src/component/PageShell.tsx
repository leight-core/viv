import {DayjsProvider}        from "@leight/i18n-client";
import {type IPageWithLayout} from "@leight/layout";
import {
    LoadingOverlay,
    MantineProvider
}                             from "@mantine/core";
import {DatesProvider}        from "@mantine/dates";
import {Notifications}        from "@mantine/notifications";
import {SessionProvider}      from "next-auth/react";
import {type AppProps}        from "next/app";
import Head                   from "next/head";
import {useRouter}            from "next/router";
import {
    type ComponentProps,
    type FC
}                             from "react";
import {RouterTransition}     from "../RouterTransition";

export interface IPageShellProps {
    /**
     * Default page title
     */
    title: string;
    colorScheme?: "dark" | "light";
    /**
     * Incoming component name from Next.js _app
     */
    Component: AppProps["Component"];
    /**
     * Incoming component page props from Next.js _app
     */
    pageProps?: AppProps["pageProps"];
    emotionCache?: ComponentProps<typeof MantineProvider>["emotionCache"];
    isLoading?: boolean;
}

/**
 * This is a wrapper for the _app as it contains basic setup (mantine stuff, ...) for the application.
 */
export const PageShell: FC<IPageShellProps> = (
    {
        title,
        colorScheme = "light",
        emotionCache,
        Component,
        pageProps,
    }) => {
    const router = useRouter();
    return <>
        <Head>
            <title>{title}</title>
            <meta
                name={"viewport"}
                content={
                    "minimum-scale=1, initial-scale=1, width=device-width"
                }
            />
            <link rel={"shortcut icon"} href={"/favicon.ico"}/>
        </Head>
        <MantineProvider
            theme={{colorScheme}}
            withGlobalStyles
            withNormalizeCSS
            emotionCache={emotionCache}
        >
            <DayjsProvider
                locale={router.locale || router.defaultLocale || "en" as any}
                loading={<LoadingOverlay
                    visible
                    transitionDuration={500}
                    loaderProps={{variant: "bars"}}
                />}
            >
                {({state: {locale}}) => <DatesProvider settings={{locale}}>
                    <Notifications position={"top-right"}/>
                    <RouterTransition/>
                    <SessionProvider
                        refetchInterval={30}
                        refetchOnWindowFocus
                    >
                        {(
                            (Component as unknown as IPageWithLayout).layout || ((page) => page)
                        )(<Component {...pageProps}/>)}
                    </SessionProvider>
                </DatesProvider>}
            </DayjsProvider>
        </MantineProvider>
    </>;
};
