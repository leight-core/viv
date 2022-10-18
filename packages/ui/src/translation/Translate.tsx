import {ITranslation}   from "@leight/shared";
import {ifString}       from "@leight/utils";
import {FC}             from "react";
import {useTranslation} from "react-i18next";

export type ITranslateProps = ITranslation;

export const Translate: FC<ITranslateProps> = ({namespace, text, values}) => {
    const {t} = useTranslation();
    return <>{ifString(text, text => t(namespace ? `${namespace}.${text}` : `${text}`, values))}</>;
};
