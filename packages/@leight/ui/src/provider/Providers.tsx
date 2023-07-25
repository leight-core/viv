"use client";

import {
    CacheProvider,
    type EmotionCache
}                               from "@emotion/react";
import {DateTimeProvider}       from "@leight/i18n";
import {
    createQueryClient,
    QueryProvider,
    WithAxios
}                               from "@leight/rpc";
import {
    MantineProvider,
    type MantineProviderProps
}                               from "@mantine/core";
import {ModalsProvider}         from "@mantine/modals";
import {Notifications}          from "@mantine/notifications";
import {NextIntlClientProvider} from "next-intl";
import {useServerInsertedHTML}  from "next/navigation";
import {
    type FC,
    type PropsWithChildren
}                               from "react";
import {withEmotionCache}       from "../emotion/withEmotionCache";
import {RouterTransition}       from "../router/RouterTransition";
import {BlockProvider}          from "../store/BlockStore";

export type IProvidersProps = PropsWithChildren<{
    theme?: MantineProviderProps["theme"];
    emotionCache?: EmotionCache;
    /**
     * Set current locale
     */
    locale: string;
    /**
     * Translations used in the application
     */
    translations: Record<string, any>;
}>;

export const Providers: FC<IProvidersProps> = (
    {
        theme,
        emotionCache = withEmotionCache(),
        locale,
        translations,
        children,
    }
) => {
    useServerInsertedHTML(() => (
        <style
            key={"emotion-cache"}
            data-emotion={`${emotionCache.key} ${Object.keys(emotionCache.inserted).join(" ")}`}
            dangerouslySetInnerHTML={{
                __html: Object.values(emotionCache.inserted).join(" "),
            }}
        />
    ));

    return <QueryProvider
        queryClient={createQueryClient()}
    >
        <WithAxios/>
        <CacheProvider
            value={emotionCache}
        >
            <NextIntlClientProvider
                locale={locale}
                messages={translations}
            >
                <MantineProvider
                    theme={{
                        colorScheme:  "light",
                        primaryColor: "green",
                        primaryShade: 8,
                        ...theme
                    }}
                    withGlobalStyles
                    withNormalizeCSS
                    emotionCache={emotionCache}
                >
                    <RouterTransition/>
                    <Notifications position={"top-right"}/>
                    <ModalsProvider>
                        <DateTimeProvider
                            locale={locale}
                        >
                            <BlockProvider>
                                {children}
                            </BlockProvider>
                        </DateTimeProvider>
                    </ModalsProvider>
                </MantineProvider>
            </NextIntlClientProvider>
        </CacheProvider>
    </QueryProvider>;
};
