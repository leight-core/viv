import {
    LoaderProvider,
    ScrollToTop,
    useLayoutLoaderContext,
    useMenuSelectionContext,
}                       from "@leight-core/viv";
import {Spin}           from "antd";
import Head             from "next/head";
import {
    FC,
    PropsWithChildren,
    useEffect
}                       from "react";
import {useTranslation} from "react-i18next";

export type IEmptyPageProps = PropsWithChildren<{
    /**
     * If provided, page title will be updated (tab name). Must be explicitly provided to change a title.
     */
    title?: string;
    /**
     * Page Tab (browser tab/window name) title.
     *
     * If complex translation is used, this should be used with simple text.
     */
    tabTitle?: string;
    /**
     * Initial blocking state of a view; when true, view shows a loader.
     *
     * Defaults to `false`.
     */
    defaultLoading?: boolean;
    /**
     * Selected menu items.
     */
    menuSelection?: string[];
    values?: any;
}>;

/**
 * Quite simple empty page without any additional features.
 */
export const EmptyPage: FC<IEmptyPageProps> = (
    {
        title,
        tabTitle,
        defaultLoading = false,
        menuSelection = [],
        values,
        children,
    }) => {
    const {t}                 = useTranslation();
    const layoutLoaderContext = useLayoutLoaderContext();
    useMenuSelectionContext().useSelection(menuSelection);
    useEffect(() => {
        layoutLoaderContext.done();
    }, []);
    tabTitle = tabTitle || (title ? `${title}.title` : undefined);
    return <>
        {tabTitle && <Head><title key={"title"}>{t(tabTitle, values)}</title></Head>}
        <ScrollToTop/>
        <LoaderProvider defaultLoading={defaultLoading}>
            {loaderContext => <Spin spinning={loaderContext.isLoading()}>
                {children}
            </Spin>}
        </LoaderProvider>
    </>;
};
