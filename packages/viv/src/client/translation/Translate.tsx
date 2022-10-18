import {ifString}          from "@leight/utils";
import {ITranslationProps} from "@leight/viv";
import {FC}                from "react";
import {useTranslation}    from "react-i18next";

export type ITranslateProps = ITranslationProps;

export const Translate: FC<ITranslateProps> = ({namespace, text, values}) => {
    const {t} = useTranslation();
    return <>{ifString(text, text => t(namespace ? `${namespace}.${text}` : `${text}`, values))}</>;
};
