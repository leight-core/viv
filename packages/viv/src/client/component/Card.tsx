import {
    isString,
    useMobile
}                       from "@leight/viv";
import {
    Card as CoolCard,
    CardProps as CoolCardProps
}                       from "antd";
import {FC}             from "react";
import {useTranslation} from "react-i18next";

export interface ICardProps extends Partial<CoolCardProps> {
}

export const Card: FC<ICardProps> = ({title, ...props}) => {
    const mobile = useMobile();
    const {t}    = useTranslation();
    return <CoolCard
        bodyStyle={mobile({padding: "8px"})}
        headStyle={mobile({minHeight: "32px"})}
        title={isString(title) ? t(title as string) : title}
        bordered={false}
        {...props}
    />;
};
