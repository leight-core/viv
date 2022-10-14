import {
    Drawer,
    IDrawerProps,
    ITranslationProps,
    Translate,
    UseToken,
    VisibleProvider
} from "@leight-core/viv";
import {
    Button,
    ButtonProps,
    Tooltip
} from "antd";
import {
    ComponentProps,
    FC,
    ReactNode
} from "react";

export interface IDrawerButtonProps extends Partial<Omit<ButtonProps, "title">> {
    label?: ReactNode | string;
    translation?: ITranslationProps;
    tooltip?: string;
    width?: string | number;
    drawerProps?: IDrawerProps;
    tokens?: ComponentProps<typeof UseToken>["tokens"];
}

/**
 * Default Antd button without any preset; just the drawer is shown on click.
 */
export const DrawerButton: FC<IDrawerButtonProps> = (
    {
        children,
        onClick,
        label,
        translation,
        tooltip,
        width = 600,
        drawerProps,
        tokens,
        ...props
    }) => {
    return <Tooltip title={tooltip ? <Translate {...translation} text={tooltip}/> : undefined}>
        <VisibleProvider>
            {visibleContext => <>
                <Drawer
                    translation={translation}
                    width={width}
                    {...drawerProps}
                >
                    {children}
                </Drawer>
                <UseToken tokens={tokens}>
                    <Button
                        onClick={event => {
                            visibleContext.show();
                            onClick?.(event);
                        }}
                        {...props}
                    >
                        <Translate
                            {...translation}
                            text={label}
                        />
                    </Button>
                </UseToken>
            </>}
        </VisibleProvider>
    </Tooltip>;
};
