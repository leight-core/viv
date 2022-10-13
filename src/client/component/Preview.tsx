import {
    Col,
    List,
    ListProps,
    Row,
    Tabs
}                       from "antd";
import {
    FC,
    ReactNode
}                       from "react";
import {useTranslation} from "react-i18next";
import {
    BrowserContent,
    MobileContent
}                       from "../responsive";
import {TabInline}      from "../tab";

export type IPreviewPropsChildren = {
    /**
     * Name of a group; used for tab name (and eventually others).
     */
    name: string;
    /**
     * Items of a preview.
     */
    items: Record<string, ReactNode>;
};

interface IListingProps {
    translation?: string;
    hideEmpty: boolean;
    children: Record<string, ReactNode>;
}

const Listing: FC<IListingProps> = ({translation, children, hideEmpty}) => {
    const {t} = useTranslation();
    return <>
        {Object.entries(children).map(([key, item]) => (item || (!item && !hideEmpty)) && <List.Item
            key={key}
        >
            <List.Item.Meta
                title={t(translation ? (translation + "." + key) : key)}
                description={item ? item : "-"}
            />
        </List.Item>)}
    </>;
};

export interface IPreviewProps extends Partial<Omit<ListProps<any>, "children">> {
    name: string;
    translation?: string;
    hideEmpty?: boolean;
    children: IPreviewPropsChildren[];
    forceTabs?: boolean;
}

export const Preview: FC<IPreviewProps> = (
    {
        name,
        translation,
        hideEmpty = false,
        children,
        forceTabs = false,
        ...props
    }) => {
    return <List
        itemLayout={"vertical"}
        size={"small"}
        {...props}
    >
        {!forceTabs && <BrowserContent>
            {children.map(({name: group, items}) => {
                const count = Math.ceil(24 / children.length);
                return <Row key={`row.${name}.${group}`} gutter={32}>
                    <Col span={count}>
                        <Listing hideEmpty={hideEmpty} translation={translation}>
                            {items}
                        </Listing>
                    </Col>
                </Row>;
            })}
        </BrowserContent>}
        <MobileContent force={forceTabs}>
            <Tabs>
                {children.map(({name: group, items}) => {
                    return <Tabs.TabPane key={`${name}.group.${group}`} tab={<TabInline title={`${name}.${group}.tab`}/>}>
                        <Listing hideEmpty={hideEmpty} translation={translation}>
                            {items}
                        </Listing>
                    </Tabs.TabPane>;
                })}
            </Tabs>
        </MobileContent>
    </List>;
};
