import {
    IQueryParams,
    isString,
    useMenuSelectionContext,
    useNavigate
}                       from "@leight-core/viv";
import {TabBar}         from "antd-mobile";
import {
    FC,
    ReactNode
}                       from "react";
import {useTranslation} from "react-i18next";

export interface ITabBarMenuItem {
    icon?: ReactNode;
    label?: ReactNode;
    href: string;
    query?: IQueryParams;
}

export interface ITabBarMenuProps {
    items: (ITabBarMenuItem | null)[];
}

export const TabBarMenu: FC<ITabBarMenuProps> = ({items}) => {
    const {t}                                       = useTranslation();
    const navigate                                  = useNavigate();
    const menuSelectionContext                      = useMenuSelectionContext();
    const hrefs: { [key: string]: ITabBarMenuItem } = {};
    for (const item of items) {
        item && (hrefs[item.href] = item);
    }
    return <TabBar
        activeKey={menuSelectionContext.selection?.[0]}
        onChange={href => navigate(hrefs[href].href, hrefs[href].query)}
    >
        {(items.filter(i => Boolean(i)) as ITabBarMenuItem[]).map(({href, icon, label}) => <TabBar.Item
            key={href}
            title={isString(label) ? t(`${label}`) : label}
            icon={icon}
        />)}
    </TabBar>;
};
