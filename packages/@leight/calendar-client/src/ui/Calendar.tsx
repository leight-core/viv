import {DateInline}  from "@leight/i18n-client";
import {classNames}  from "@leight/utils-client";
import {
    Container,
    createStyles,
    Grid,
    LoadingOverlay,
    Stack
}                    from "@mantine/core";
import {
    IconChevronDown,
    IconChevronUp
}                    from "@tabler/icons-react";
import {
    ComponentProps,
    type FC
}                    from "react";
import {useCalendar} from "../context";

const useStyles = createStyles(theme => ({
    calendar:      {
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
    controls:      {
        "& > div:last-child": {
            borderRight: "1px solid",
            borderColor: theme.colors["gray"][4],
        },
        "& .middle":          {
            display:        "flex",
            flex:           "1 1 auto",
            justifyContent: "center",
            alignItems:     "center",
            cursor:         "pointer",
            "&:hover":      {
                backgroundColor: theme.colors["gray"][1],
            },
        },
        "& .right":           {
            display:        "flex",
            flex:           "1 1 auto",
            justifyContent: "end",
            alignItems:     "center",
        },
        "& .secondary":       {
            color: theme.colors["gray"][5],
        }
    },
    controlPrefix: {},
    controlSuffix: {},
    header:        {
        backgroundColor: theme.colors["gray"][2],
        height:          "5em",
        display:         "flex",
        flex:            "1 1 auto",
        justifyContent:  "center",
        alignItems:      "center",
    },
    day:           {
        height:    "8em",
        padding:   "0.4em 0.6em",
        "&:hover": {
            backgroundColor: theme.colors["gray"][2],
        },
    },
    weekRow:       {
        "& > div": {
            borderRight: "1px solid",
            borderColor: theme.colors["gray"][4],
        },
    },
    currentWeek:   {},
    currentDay:    {
        backgroundColor: theme.colors["gray"][4],
    },
    inRange:       {
        fontWeight: "bold",
    },
    outOfRange:    {
        backgroundColor: theme.colors["gray"][1],
        "&:hover":       {
            backgroundColor: theme.colors["gray"][2],
        },
    },
}));

export interface ICalendarProps extends Omit<ComponentProps<typeof Container>, "children"> {
    withControls?: boolean;
    weekCountSize?: number;
    columnSize?: number;
    isLoading?: boolean;
}

export const Calendar: FC<ICalendarProps> = (
    {
        withControls = true,
        weekCountSize = 0,
        columnSize = 3,
        isLoading: $isLoading,
        ...        props
    }) => {
    /**
     * Listening for whole `calendar` changes is OK, because when something inside changes, the whole calendar goes
     * recomputed.
     */
    const {
              nextMonth,
              prevMonth,
              isLoading,
              calendar: {
                            weeks,
                            days,
                            start,
                            end,
                            input,
                        }
          }                  = useCalendar(({calendar, nextMonth, prevMonth, isLoading}) => ({calendar, nextMonth, prevMonth, isLoading}));
    /**
     * This is specific for Mantine Grid: compute number of columns to render.
     */
    const columnCount        = (days.length * columnSize) + weekCountSize;
    const {classes}          = useStyles();
    const controlColumnCount = 12;
    const controlWidth       = 3;

    return <Container
        pos={"relative"}
        {...props}
    >
        <LoadingOverlay visible={$isLoading !== undefined ? $isLoading : isLoading}/>
        {/*
            Stack is necessary to keep Grid in place properly or it shrinks and renders bad.
         */}
        <Stack
            className={classes.calendar}
        >
            {withControls && <Grid
                columns={controlColumnCount}
                className={classNames(
                    classes.controls,
                    classes.controlPrefix,
                )}
            >
                <Grid.Col
                    span={controlWidth}
                    className={"left"}
                >
                        <span className={"secondary"}>
                            <DateInline input={input.toJSDate()}/>
                        </span>
                </Grid.Col>
                <Grid.Col
                    span={controlColumnCount - (controlWidth * 2)}
                    className={"middle"}
                    onClick={() => prevMonth()}
                >
                    <IconChevronUp/>
                </Grid.Col>
                <Grid.Col
                    span={controlWidth}
                    className={"right"}
                >
                    -- dynamic controls
                </Grid.Col>
            </Grid>}
            {/*
                First of all: render header with all days of the week; they're already localised from
                the calendar, so it's just simple render here.
             */}
            <Grid
                columns={columnCount}
                className={classes.weekRow}
            >
                {weekCountSize > 0 && <Grid.Col
                    span={weekCountSize}
                    className={classes.header}
                />}
                {days.map(day => <Grid.Col
                    key={`day-${day}`}
                    span={columnSize}
                    className={classes.header}
                >
                    {day}
                </Grid.Col>)}
            </Grid>
            {/*
                Quite simple stuff: take all weeks compute by the calendar and render them. That's all
             */}
            {weeks.map(({days, number, current, id}) => <Grid
                key={id}
                columns={columnCount}
                className={classNames(
                    classes.weekRow,
                    current ? classes.currentWeek : undefined,
                )}
            >
                {weekCountSize > 0 && <Grid.Col
                    span={weekCountSize}
                >
                    {number}.
                </Grid.Col>}
                {/*
                    Grid is already properly setup (number of columns), so render day by day as a calendar says.
                 */}
                {days.map(({day, current, outOfRange, id}) => <Grid.Col
                    key={id}
                    span={columnSize}
                    className={classNames(
                        classes.day,
                        current ? classes.currentDay : undefined,
                        outOfRange ? classes.outOfRange : classes.inRange
                    )}
                >
                    <div
                        style={{
                            textAlign: "right",
                        }}
                    >
                        {day.day}
                    </div>
                </Grid.Col>)}
            </Grid>)}
            {withControls && <Grid
                columns={12}
                className={classNames(
                    classes.controls,
                    classes.controlSuffix,
                )}
            >
                <Grid.Col
                    span={controlWidth}
                    className={"left"}
                >
                        <span
                            className={"secondary"}
                        >
                            <DateInline input={end.toJSDate()}/>
                        </span>
                </Grid.Col>
                <Grid.Col
                    span={controlColumnCount - (controlWidth * 2)}
                    className={"middle"}
                    onClick={() => nextMonth()}
                >
                    <IconChevronDown/>
                </Grid.Col>
                <Grid.Col
                    span={controlWidth}
                    className={"right"}
                />
            </Grid>}
        </Stack>
    </Container>;
};
