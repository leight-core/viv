import {DateTimeProvider} from "@leight/i18n-client";
import {MantineProvider}  from "@mantine/core";
import {Notifications}    from "@mantine/notifications";
import {
    type ComponentProps,
    type FC,
    type PropsWithChildren
}                         from "react";

export type IShellProps = PropsWithChildren<{
    colorScheme?: "dark" | "light";
    emotionCache?: ComponentProps<typeof MantineProvider>["emotionCache"];
}>

export const Shell: FC<IShellProps> = ({colorScheme = "light", emotionCache, children}) => {
    return <MantineProvider
        theme={{colorScheme}}
        withGlobalStyles
        withNormalizeCSS
        emotionCache={emotionCache}
    >
        <DateTimeProvider>
            <Notifications position={"top-right"}/>
            {children}
        </DateTimeProvider>
    </MantineProvider>;
};
