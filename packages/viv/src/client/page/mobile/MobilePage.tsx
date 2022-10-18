import {
    INavigate,
    IQueryParams,
    isString,
    MobileContent,
    useIsMobile,
    useMenuSelectionContext,
    useNavigate
}                       from "@leight/viv";
import {Space}          from "antd";
import {
    NavBar,
    SafeArea
}                       from "antd-mobile";
import Head             from "next/head";
import {
    ComponentProps,
    FC,
    PropsWithChildren,
    ReactNode,
    useEffect
}                       from "react";
import {useTranslation} from "react-i18next";

const appHeight = () => {
    document.documentElement.style.setProperty("--app-height", `${window.innerHeight}px`);
};

export type IMobilePageProps = PropsWithChildren<{
    header?: ReactNode;
    icon?: ReactNode;
    /**
     * Selected menu items.
     */
    menuSelection?: string[];
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
    values?: Record<string, any>;
    footer?: ReactNode;
    navbarProps?: Partial<ComponentProps<typeof NavBar>>;
    onBack?(navigate: INavigate<IQueryParams>): void;
}>

export const MobilePage: FC<IMobilePageProps> = (
    {
        header,
        icon,
        title,
        children,
        footer,
        tabTitle,
        values,
        menuSelection = [],
        onBack,
        navbarProps,
    }) => {
    const isMobile = useIsMobile();
    const navigate = useNavigate();
    useEffect(() => {
        window.addEventListener("resize", appHeight);
        appHeight();
        return () => {
            window.removeEventListener("resize", appHeight);
        };
    }, []);
    const {t} = useTranslation();
    useMenuSelectionContext().useSelection(menuSelection);
    if (!isMobile) {
        return null;
    }

    tabTitle = tabTitle || (title ? `${title}.title` : undefined);
    return <MobileContent>
        {tabTitle && <Head><title key={"title"}>{t(tabTitle, values)}</title></Head>}
        <SafeArea position={"top"}/>
        <div
            className={"app-height"}
            style={{
                padding:  "0",
                margin:   "0",
                overflow: "hidden",
                width:    "100vw",
                height:   "var(--app-height)",

                display:         "flex",
                flexDirection:   "column",
                backgroundColor: "#FFF",
            }}
        >
            <div style={{
                flex:         0,
                borderBottom: "solid 1px var(--adm-color-border)",
            }}>
                {header || (header !== null && <NavBar
                    backArrow={!!onBack}
                    onBack={() => onBack?.(navigate)}
                    {...navbarProps}
                >
                    <Space size={4}>
                        {icon}
                        {isString(title) ? t(`${title}.title`) : title}
                    </Space>
                </NavBar>)}
            </div>
            <div
                style={{
                    flex:           1,
                    display:        "flex",
                    justifyContent: "start",
                    alignItems:     "start",
                    overflow:       "auto",
                }}
            >
                <div style={{
                    width:    "100vw",
                    overflow: "auto",
                }}>
                    {children}
                </div>
            </div>
            {footer && <div
                style={{
                    flex:      0,
                    borderTop: "solid 1px var(--adm-color-border)",
                }}
            >
                {footer}
            </div>}
        </div>
        <SafeArea position={"bottom"}/>
    </MobileContent>;
};
