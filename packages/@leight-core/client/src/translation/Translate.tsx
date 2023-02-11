import {ITranslationProps} from "@leight-core/api";
import {isString}          from "@leight/utils";
import {FC}                from "react";
import {useTranslation}    from "../i18n";

export type ITranslateProps = ITranslationProps;

export const Translate: FC<ITranslateProps> = ({namespace, text, values}) => {
	const {t} = useTranslation();
	return <>{isString(text) ? t(namespace ? `${namespace}.${text}` : `${text}`, values as any) : text}</>;
};
