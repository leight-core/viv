import {ifString}       from "@leight/utils";
import {
    IQueryParams,
    MobileContent,
    useNavigate
}                       from "@leight/viv";
import {List}           from "antd-mobile";
import {
    FC,
    ReactNode
}                       from "react";
import {useTranslation} from "react-i18next";

export interface IMobileMenuItem {
    icon?: ReactNode;
    label?: ReactNode;
    href: string;
    query?: IQueryParams;
}

export interface IMobileMenuProps {
    title?: ReactNode;
    items: IMobileMenuItem[];
}

export const MobileMenu: FC<IMobileMenuProps> = ({title, items}) => {
    const {t}      = useTranslation();
    const navigate = useNavigate();
    return <MobileContent>
        <List
            header={ifString(title, title => t(title))}
        >
            {items.map(({label, href, query, icon}) => <List.Item
                key={href}
                prefix={icon}
                onClick={() => navigate(href, query)}
            >
                {ifString(label, label => t(label))}
            </List.Item>)}
        </List>
    </MobileContent>;
};
