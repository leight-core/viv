import {Menu}           from "antd";
import React, {
	ComponentProps,
	FC
}                       from "react";
import {useTranslation} from "../i18n";

export interface IMenuGroupProps extends Partial<ComponentProps<typeof Menu.ItemGroup>> {
	id: string;
}

export const MenuGroup: FC<IMenuGroupProps> = (
	{
		id,
		...props
	}) => {
	const {t} = useTranslation();
	return <Menu.ItemGroup title={t(`${id}.menu`)} {...props}/>;
};
