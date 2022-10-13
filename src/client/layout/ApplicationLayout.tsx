import {
    BrowserContent,
    LoaderIcon,
    MobileContent,
    PlaceholderPage,
    useLayoutLoaderContext,
} from "@leight-core/viv";
import {
    Layout,
    Spin
} from "antd";
import React, {
    CSSProperties,
    FC,
    PropsWithChildren,
    ReactNode,
    Suspense
} from "react";

export type IApplicationLayoutProps = PropsWithChildren<{
    /**
     * Page (component layout) header.
     */
    header: ReactNode;
    /**
     * Page (component layout) footer.
     */
    footer: ReactNode;
    /**
     * Optional styling of layout content.
     */
    contentStyle?: CSSProperties;
}>;

export const ApplicationLayout: FC<IApplicationLayoutProps> = ({header, footer, contentStyle, ...props}) => {
    const layoutLoaderContext = useLayoutLoaderContext();
    return <Layout>
        <Spin indicator={<LoaderIcon/>} spinning={layoutLoaderContext.isLoading()}>
            <BrowserContent>
                {header}
                <Layout>
                    <Layout>
                        <Layout.Content style={{minHeight: "92vh", padding: "0 1em", ...contentStyle}}>
                            <Suspense fallback={<PlaceholderPage/>} {...props}/>
                            {footer && <Layout.Footer>
                                {footer}
                            </Layout.Footer>}
                        </Layout.Content>
                    </Layout>
                </Layout>
            </BrowserContent>
            <MobileContent>
                <Layout>
                    <Layout.Content style={{minHeight: "100vh", ...contentStyle}}>
                        <Suspense fallback={<PlaceholderPage/>} {...props}/>
                    </Layout.Content>
                </Layout>
            </MobileContent>
        </Spin>
    </Layout>;
};
