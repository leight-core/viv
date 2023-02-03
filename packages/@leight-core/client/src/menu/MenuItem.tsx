import {IQueryParams} from "@leight-core/api";
import {ItemType} from "antd/lib/menu/hooks/useItems";
import {FC, ReactNode} from "react";
import {Trans, useTranslation} from "react-i18next";
import {LinkTo} from "../link";

export interface IMenuItemProps {
	/**
	 * Menu item title, goes through translation.
	 */
	title?: string;
	/**
	 * Menu item href, goes through a link generator.
	 */
	href: string;
	icon?: ReactNode;
	/**
	 * Optional params for link generator.
	 */
	query?: IQueryParams | void;
}

export const MenuItem: FC<IMenuItemProps> = ({title, icon, href, query}) => {
	const {t} = useTranslation();
	return <LinkTo href={href} query={query}>
		{title ? t(title) : icon}
	</LinkTo>;
};

export type ICreateMenuItemProps =
	{
		title?: string;
		href: string;
		icon: ReactNode;
		query?: IQueryParams | void;
	}
	& Partial<ItemType>;

/**
 * Because MenuItem component **must have** a key which is duplicate with an ID (as a key is not possible to read),
 * this function let's user create a menu item with just an ID and icon.
 *
 * Basically it has the same behavior as MenuItem component.
 */
export function CreateMenuItem({icon, href, title, query, ...props}: ICreateMenuItemProps): any {
	return {
		icon: title ? icon : <MenuItem icon={icon} href={href} query={query}/>,
		key: href,
		href,
		query,
		label: title ? <MenuItem title={title} href={href} query={query}/> : undefined,
		...props,
	};
}

export type ICreateMenuGroupProps =
	{
		title: string;
		icon: ReactNode;
		items: ItemType[];
	}
	& Partial<ItemType>;

export function CreateMenuGroup({icon, title, items, ...props}: ICreateMenuGroupProps): any {
	return {
		icon,
		key: title,
		label: <Trans i18nKey={title}/>,
		children: items,
		...props,
	};
}
