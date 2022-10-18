import {
    isString,
    ITranslationProps
}                       from "@leight/viv";
import {FC}             from "react";
import {useTranslation} from "react-i18next";

export type ITranslateProps = ITranslationProps;

export const Translate: FC<ITranslateProps> = ({namespace, text, values}) => {
    const {t} = useTranslation();
    return <>{isString(text) ? t(namespace ? `${namespace}.${text}` : `${text}`, values) : text}</>;
};
