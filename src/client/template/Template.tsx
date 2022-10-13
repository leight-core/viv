import {
    Centered,
    useIsBrowser,
    useIsMobile
}                       from "@leight-core/viv";
import {Result}         from "antd";
import {
    ComponentProps,
    FC,
    ReactNode
}                       from "react";
import {useTranslation} from "react-i18next";

export interface ITemplateProps extends Partial<ComponentProps<typeof Result>> {
    label?: string;
    span?: number;
    forceIcon?: boolean;
    browserExtra?: ReactNode;
    mobileExtra?: ReactNode;
}

export const Template: FC<ITemplateProps> = ({icon, forceIcon = false, browserExtra, mobileExtra, label, title, subTitle, span = 16, children, ...props}) => {
    const {t}       = useTranslation();
    const isMobile  = useIsMobile();
    const isBrowser = useIsBrowser();
    return <>
        {(isBrowser || isMobile) && <Result
            style={{padding: 0}}
            icon={icon ? (isBrowser || forceIcon) ? icon : <></> : <></>}
            title={(title || title === false) ? title : (label ? t(label + ".title") : label)}
            subTitle={(subTitle || subTitle === false) ? subTitle : (label ? t(label + ".subtitle") : label)}
            extra={isBrowser ? browserExtra : mobileExtra}
            {...props}
        />}
        {isMobile ? children : <Centered span={span}>
            {children}
        </Centered>}
    </>;
};
