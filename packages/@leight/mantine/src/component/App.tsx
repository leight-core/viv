import {I18NextProvider}      from "@leight/i18n-client";
import {type IPageWithLayout} from "@leight/layout";
import {MantineProvider}      from "@mantine/core";
import {Notifications}        from "@mantine/notifications";
import {type i18n}            from "i18next";
import {SessionProvider}      from "next-auth/react";
import {type AppProps}        from "next/app";
import Head                   from "next/head";
import {
    type ComponentProps,
    type FC
}                             from "react";
import {RouterTransition}     from "../RouterTransition";

export interface IAppProps {
    title: string;
    i18next: i18n;
    Component: AppProps["Component"];
    pageProps?: AppProps["pageProps"];
    emotionCache: ComponentProps<typeof MantineProvider>["emotionCache"];
}

export const App: FC<IAppProps> = (
    {
        title,
        i18next,
        emotionCache,
        Component,
        pageProps,
    }) => {
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
            theme={{colorScheme: "light"}}
            withGlobalStyles
            withNormalizeCSS
            emotionCache={emotionCache}
        >
            <Notifications/>
            <RouterTransition/>
            <SessionProvider
                refetchInterval={30}
                refetchOnWindowFocus
            >
                <I18NextProvider
                    defaults={{i18next}}
                >
                    {(
                        (Component as unknown as IPageWithLayout)
                            .layout || ((page) => page)
                    )(<Component {...pageProps}/>)}
                </I18NextProvider>
            </SessionProvider>
        </MantineProvider>
    </>;
};
