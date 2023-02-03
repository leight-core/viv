import {Space, SpaceProps} from "antd";
import {FC, ReactNode} from "react";
import {useTranslation} from "react-i18next";
import {isString} from "@leight/utils";

export interface IBreadcrumbIconProps extends Partial<SpaceProps> {
	icon?: ReactNode;
	label?: string | ReactNode;
}

export const BreadcrumbIcon: FC<IBreadcrumbIconProps> = ({icon, label, ...props}) => {
	const {t} = useTranslation();
	return <Space size={"small"} {...props}>
		{icon}
		{isString(label) ? t(label) : label}
	</Space>;
};
