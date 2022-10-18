import {
    Centered,
    ITranslateProps,
    Translate,
    useMobile,
    useVisibleContext
} from "@leight/viv";
import {
    Drawer as CoolDrawer,
    Space
} from "antd";
import {
    ComponentProps,
    FC,
    ReactNode
} from "react";

type CoolDrawerProps = ComponentProps<typeof CoolDrawer>;

export interface IDrawerProps extends Partial<Omit<CoolDrawerProps, "title">> {
    translation?: ITranslateProps;
    fullscreen?: boolean;
    placement?: CoolDrawerProps["placement"];
    icon?: ReactNode;
}

/**
 * Drawer controlled by a DrawerContext.
 */
export const Drawer: FC<IDrawerProps> = (
    {
        translation,
        icon,
        width,
        height,
        fullscreen = false,
        placement = "right",
        push = false,
        ...props
    }) => {
    const visibleContext = useVisibleContext();
    const mobile         = useMobile();
    fullscreen && (width = "100vw") && (height = "100vh");
    return <CoolDrawer
        title={<Centered>
            <Space>
                {icon}
                <Translate {...translation}/>
            </Space>
        </Centered>}
        keyboard={false}
        width={mobile("100vw", width)}
        height={height}
        headerStyle={mobile({padding: "8px 4px"})}
        bodyStyle={{overflowY: "scroll", padding: mobile("0 1.25em")}}
        placement={placement}
        push={push}
        closable
        onClose={() => visibleContext.hide()}
        open={visibleContext.visible}
        destroyOnClose
        {...props}
    />;
};
