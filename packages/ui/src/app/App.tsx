import {
    DayjsProvider,
    I18NextProvider,
    IResponsiveProviderProps,
    ITranslationsQuery,
    LayoutLoaderProvider,
    MenuSelectionProvider,
    ResponsiveProvider,
    TranslationLoader
}                        from "@leight/ui";
import {
    QueryClient,
    QueryClientProvider
}                        from "@tanstack/react-query";
import {i18n}            from "i18next";
import {
    FC,
    PropsWithChildren,
    ReactNode
}                        from "react";
import {CookiesProvider} from "react-cookie";

export type IAppProps = PropsWithChildren<{
    logo?: ReactNode;
    useTranslationQuery?: ITranslationsQuery;
    queryClient: QueryClient;
    dayjs: any;
    i18next: i18n;
    responsiveProviderProps?: IResponsiveProviderProps;
}>;

/**
 * Common default Application providing all necessary internal contexts.
 */
export const App: FC<IAppProps> = (
    {
        logo,
        useTranslationQuery,
        dayjs,
        i18next,
        queryClient,
        responsiveProviderProps,
        ...props
    }) => {
    return <QueryClientProvider client={queryClient}>
        <ResponsiveProvider {...responsiveProviderProps}>
            <DayjsProvider dayjs={dayjs}>
                <I18NextProvider i18next={i18next}>
                    <CookiesProvider>
                        <TranslationLoader useQuery={useTranslationQuery} logo={logo}>
                            <MenuSelectionProvider>
                                <LayoutLoaderProvider {...props}/>
                            </MenuSelectionProvider>
                        </TranslationLoader>
                    </CookiesProvider>
                </I18NextProvider>
            </DayjsProvider>
        </ResponsiveProvider>
    </QueryClientProvider>;
};
