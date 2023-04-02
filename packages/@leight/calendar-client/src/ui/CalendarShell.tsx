import {type InferSelectors} from "@leight/mantine";
import {isCallable}          from "@leight/utils";
import {classNames}          from "@leight/utils-client";
import {
    Container,
    createStyles,
    Grid
}                            from "@mantine/core";
import {
    type ComponentProps,
    type FC,
    ReactNode
}                            from "react";

const useStyles = createStyles(theme => ({
    calendar:       {
        "& .mantine-Grid-root": {
            border:         "1px solid",
            borderColor:    theme.colors["gray"][4],
            borderBottom:   "none",
            borderRight:    "none",
            "&:last-child": {
                border:      "1px solid",
                borderColor: theme.colors["gray"][4],
                borderRight: "none",
            },
        },
        userSelect:             "none",
    },
    controlsGrid:   {
        "& > div:last-child": {
            borderRight: "1px solid",
            borderColor: theme.colors["gray"][4],
        },
    },
    controls:       {
        display:    "flex",
        flex:       "1 1 auto",
        alignItems: "center",
    },
    controlsLeft:   {},
    controlsMiddle: {
        justifyContent: "center",
    },
    controlsRight:  {
        justifyContent: "end",
    },
    controlsPrefix: {},
    controlsSuffix: {},
    header:         {
        backgroundColor: theme.colors["gray"][2],
        height:          "5em",
        display:         "flex",
        flex:            "1 1 auto",
        justifyContent:  "center",
        alignItems:      "center",
    },
    day:            {
        height:    "8em",
        padding:   "0.4em 0.6em",
        "&:hover": {
            backgroundColor: theme.colors["gray"][2],
        },
    },
    weekRow:        {
        "& > div": {
            borderRight: "1px solid",
            borderColor: theme.colors["gray"][4],
        },
    },
    currentWeek:    {},
    currentDay:     {
        backgroundColor: theme.colors["gray"][4],
    },
    inRange:        {
        fontWeight: "bold",
    },
    outOfRange:     {
        backgroundColor: theme.colors["gray"][1],
        "&:hover":       {
            backgroundColor: theme.colors["gray"][2],
        },
    },
}));

export type ICalendarStyles = InferSelectors<typeof useStyles>;

export type ICalendarComponent =
    ((props: ICalendarComponent.IRenderProps) => ReactNode)
    | ReactNode;

export namespace ICalendarComponent {
    export interface IRenderProps {
        classes: ICalendarStyles;
    }
}

export interface ICalendarShellProps extends Omit<ComponentProps<typeof Container>, "children"> {
    withControls?: boolean;
    controlsTopLeft?: ICalendarComponent;
    controlsTopMiddle?: ICalendarComponent;
    controlsTopRight?: ICalendarComponent;
    controlsBottomLeft?: ICalendarComponent;
    controlsBottomMiddle?: ICalendarComponent;
    controlsBottomRight?: ICalendarComponent;
    children: ICalendarComponent;
}

const renderComponent = (component: ICalendarComponent | undefined, props: ICalendarComponent.IRenderProps) => isCallable(component) ? component(props) : component;

/**
 * Styled shell for Calendar.
 */
export const CalendarShell: FC<ICalendarShellProps> = (
    {
        withControls = true,
        controlsTopLeft,
        controlsTopMiddle,
        controlsTopRight,
        controlsBottomLeft,
        controlsBottomMiddle,
        controlsBottomRight,
        children,
        ...props
    }) => {
    const {classes}          = useStyles();
    const controlColumnCount = 18;
    const controlWidth       = 7;

    const renderProps: ICalendarComponent.IRenderProps = {
        classes,
    };

    return <Container
        className={classes.calendar}
        {...props}
    >
        {withControls && <Grid
            columns={controlColumnCount}
            className={classNames(
                classes.controlsGrid,
                classes.controlsPrefix,
            )}
            m={0}
        >
            <Grid.Col
                span={controlWidth}
                className={classNames(
                    classes.controls,
                    classes.controlsLeft,
                )}
            >
                {renderComponent(controlsTopLeft, renderProps)}
            </Grid.Col>
            <Grid.Col
                span={controlColumnCount - (controlWidth * 2)}
                className={classNames(
                    classes.controls,
                    classes.controlsMiddle,
                )}
            >
                {renderComponent(controlsTopMiddle, renderProps)}
            </Grid.Col>
            <Grid.Col
                span={controlWidth}
                className={classNames(
                    classes.controls,
                    classes.controlsRight,
                )}
            >
                {renderComponent(controlsTopRight, renderProps)}
            </Grid.Col>
        </Grid>}
        {renderComponent(children, renderProps)}
        {withControls && <Grid
            columns={controlColumnCount}
            className={classNames(
                classes.controlsGrid,
                classes.controlsSuffix,
            )}
            m={0}
        >
            <Grid.Col
                span={controlWidth}
                className={classNames(
                    classes.controls,
                    classes.controlsLeft,
                )}
            >
                {renderComponent(controlsBottomLeft, renderProps)}
            </Grid.Col>
            <Grid.Col
                span={controlColumnCount - (controlWidth * 2)}
                className={classNames(
                    classes.controls,
                    classes.controlsMiddle,
                )}
            >
                {renderComponent(controlsBottomMiddle, renderProps)}
            </Grid.Col>
            <Grid.Col
                span={controlWidth}
                className={classNames(
                    classes.controls,
                    classes.controlsRight,
                )}
            >
                {renderComponent(controlsBottomRight, renderProps)}
            </Grid.Col>
        </Grid>}
    </Container>;
};
