import {Menu}           from "antd";
import React, {
	ComponentProps,
	FC
}                       from "react";
import {useTranslation} from "react-i18next";

export interface ISubMenuProps extends Partial<ComponentProps<typeof Menu.SubMenu>> {
	id: string;
}

export const SubMenu: FC<ISubMenuProps> = (
	{
		id,
		...props
	}) => {
	const {t} = useTranslation();
	return <Menu.SubMenu title={t(id + ".menu")} {...props}/>;
};
