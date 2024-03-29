import {type ICalendarEventSourceSchema} from "@leight/calendar";
import {
    type InferSelectors,
    switchScheme,
    withPrimaryColor,
    withSecondaryPrimaryColor
}                                        from "@leight/mantine";
import {type ISource}                    from "@leight/source";
import {
    isCallable,
    withBool
}                                        from "@leight/utils";
import {
    BlockStore,
    classNames
}                                        from "@leight/utils-client";
import {
    Box,
    Container,
    createStyles,
    Grid,
    LoadingOverlay
}                                        from "@mantine/core";
import {
    type ComponentProps,
    type ReactNode
}                                        from "react";

const useStyles = createStyles(theme => ({
    calendar:       {
        userSelect: "none",
    },
    calendarGrid:   {
        border:         "1px solid",
        borderColor:    switchScheme(
            theme,
            theme.colors.gray[6],
            theme.colors.gray[4]
        ),
        borderBottom:   "none",
        borderRight:    "none",
        "&:last-child": {
            border:      "1px solid",
            borderColor: switchScheme(
                theme,
                theme.colors.gray[6],
                theme.colors.gray[4]
            ),
            borderRight: "none",
        },
    },
    controlsGrid:   {
        "& > div:last-child": {
            borderRight:      "1px solid",
            borderRightColor: switchScheme(
                theme,
                theme.colors.gray[6],
                theme.colors.gray[4]
            ),
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
        backgroundColor: switchScheme(
            theme,
            theme.colors.gray[6],
            theme.colors.gray[0]
        ),
        fontWeight:      "bold",
        height:          "3em",
        display:         "flex",
        flex:            "1 1 auto",
        justifyContent:  "center",
        alignItems:      "center",
        "&.compact":     {
            height: "2em",
        },
    },
    cell:           {
        height:      "6em",
        padding:     "0",
        "&:hover":   {
            backgroundColor: switchScheme(
                theme,
                theme.colors.gray[6],
                theme.colors.gray[0]
            ),
        },
        "&.compact": {
            fontWeight:     "normal",
            height:         "2em",
            display:        "flex",
            flex:           "1 1 auto",
            justifyContent: "center",
            alignItems:     "center",
        }
    },
    monthCell:      {
        display:        "flex",
        flex:           "1 1 auto",
        justifyContent: "center",
        alignItems:     "center",
    },
    yearCell:       {
        display:        "flex",
        flex:           "1 1 auto",
        justifyContent: "center",
        alignItems:     "center",
    },
    row:            {
        "& > div": {
            borderRight: "1px solid",
            borderColor: switchScheme(
                theme,
                theme.colors.gray[6],
                theme.colors.gray[4]
            ),
        },
    },
    currentMonth:   {
        fontWeight:      "bold",
        backgroundColor: switchScheme(
            theme,
            theme.colors.gray[6],
            theme.colors.gray[1]
        ),
    },
    currentYear:    {
        fontWeight:      "bold",
        backgroundColor: switchScheme(
            theme,
            theme.colors.gray[6],
            theme.colors.gray[1]
        ),
    },
    currentWeek:    {},
    currentDay:     {
        backgroundColor: withPrimaryColor(theme, -4),
        color:           withSecondaryPrimaryColor(theme, -4),
        "&:hover":       {
            backgroundColor: withPrimaryColor(theme, -3),
            color:           withSecondaryPrimaryColor(theme, -2),
        },
    },
    inRange:        {
        fontWeight: "bold",
    },
    outOfRange:     {
        backgroundColor: switchScheme(
            theme,
            theme.colors.gray[6],
            theme.colors.gray[0]
        ),
    },
}));

export type ICalendarStyles = InferSelectors<typeof useStyles>;

export type ICalendarComponent<TSourceSchema extends ICalendarEventSourceSchema> =
    ((props: ICalendarComponent.IRenderProps<TSourceSchema>) => ReactNode)
    | ReactNode;

export namespace ICalendarComponent {
    export interface IRenderProps<TSourceSchema extends ICalendarEventSourceSchema> {
        classes: ICalendarStyles;
        source?: ISource.IUseResult<TSourceSchema>;
        compact?: boolean;
    }
}

export interface ICalendarShellEvents<
    TSourceSchema extends ICalendarEventSourceSchema
> {
    schema: TSourceSchema["DtoSchema"];
    Source: ISource<TSourceSchema>;
}

export interface ICalendarShellProps<TSourceSchema extends ICalendarEventSourceSchema> extends Omit<ComponentProps<typeof Container>, "children"> {
    events?: ICalendarShellEvents<TSourceSchema>;
    withControls?: boolean;
    controlsTopLeft?: ICalendarComponent<TSourceSchema>;
    controlsTopMiddle?: ICalendarComponent<TSourceSchema>;
    controlsTopRight?: ICalendarComponent<TSourceSchema>;
    controlsBottomLeft?: ICalendarComponent<TSourceSchema>;
    controlsBottomMiddle?: ICalendarComponent<TSourceSchema>;
    controlsBottomRight?: ICalendarComponent<TSourceSchema>;
    compact?: boolean;
    children: ICalendarComponent<TSourceSchema>;
}

const renderComponent = <TSourceSchema extends ICalendarEventSourceSchema>(component: ICalendarComponent<TSourceSchema> | undefined, props: ICalendarComponent.IRenderProps<TSourceSchema>) => isCallable(component) ? component(props) : component;

/**
 * Styled shell for Calendar.
 */
export const CalendarShell = <TSourceSchema extends ICalendarEventSourceSchema = ICalendarEventSourceSchema>(
    {
        events,
        withControls = true,
        controlsTopLeft,
        controlsTopMiddle,
        controlsTopRight,
        controlsBottomLeft,
        controlsBottomMiddle,
        controlsBottomRight,
        compact = false,
        children,
        ...props
    }: ICalendarShellProps<TSourceSchema>) => {
    const blockStore = BlockStore.use$();
    const source = events?.Source.use();
    const {classes} = useStyles();
    const controlColumnCount = 18;
    const controlWidth = 7;

    const renderProps: ICalendarComponent.IRenderProps<TSourceSchema> = {
        classes,
        source,
        compact,
    };

    return <Box
        className={classes.calendar}
        {...props}
    >
        <LoadingOverlay visible={withBool(blockStore?.isBlock, source?.result.isFetching || false)}/>
        {withControls && <Grid
            columns={controlColumnCount}
            className={classNames(
                classes.calendarGrid,
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
        {withControls && (controlsBottomLeft || controlsBottomMiddle || controlsBottomRight) && <Grid
            columns={controlColumnCount}
            className={classNames(
                classes.calendarGrid,
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
    </Box>;
};
