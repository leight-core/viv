import {Space} from "antd";
import {FC, ReactNode} from "react";
import {useTranslation} from "react-i18next";
import {isString} from "@leight/utils";

export interface ITabInlineProps {
	title?: ReactNode;
	icon?: ReactNode;
}

export const TabInline: FC<ITabInlineProps> = ({title, icon}) => {
	const {t} = useTranslation();
	return <Space size={0}>
		{icon}
		{title && (isString(title) ? t(title) : title)}
	</Space>;
};
