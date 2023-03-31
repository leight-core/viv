import {type ICalendarItem} from "@leight/calendar";
import {Date}               from "@leight/i18n-client";
import {classNames}         from "@leight/utils-client";
import {
    Container,
    createStyles,
    Grid,
    Group,
    Stack
}                           from "@mantine/core";
import {useCalendar}        from "../context";

const useStyles = createStyles(theme => ({
    calendar:   {
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
    },
    header:     {
        backgroundColor: theme.colors["gray"][2],
        height:          "5em",
        display:         "flex",
        flex:            "1 1 auto",
        justifyContent:  "center",
        alignItems:      "center",
    },
    day:        {
        height:    "8em",
        padding:   "0.4em 0.6em",
        "&:hover": {
            backgroundColor: theme.colors["gray"][2],
        },
    },
    weekRow:    {
        "& > div": {
            borderRight: "1px solid",
            borderColor: theme.colors["gray"][4],
        },
    },
    currentWeek: {},
    currentDay: {
        backgroundColor: theme.colors["gray"][4],
    },
    inRange:    {
        fontWeight: "bold",
    },
    outOfRange: {
        backgroundColor: theme.colors["gray"][1],
        "&:hover":       {
            backgroundColor: theme.colors["gray"][2],
        },
    },
}));

export interface ICalendarProps<TCalendarItem extends ICalendarItem = ICalendarItem> {
    weekCountSize?: number;
    columnSize?: number;
    items?: TCalendarItem[];
}

export const Calendar = <TCalendarItem extends ICalendarItem = ICalendarItem>(
    {
        weekCountSize = 0,
        columnSize = 3,
    }: ICalendarProps<TCalendarItem>) => {
    /**
     * Listening for whole `calendar` changes is OK, because when something inside changes, the whole calendar goes
     * recomputed.
     */
    const {calendar: {weeks, days, start, end, input}} = useCalendar(({calendar}) => ({calendar}));
    /**
     * This is specific for Mantine Grid: compute number of columns to render.
     */
    const columnCount                                  = (days.length * columnSize) + weekCountSize;
    const {classes}                                    = useStyles();

    return <Container>
        <Stack>
            <Group>
                <span>input: <Date input={input.toJSDate()}/></span>
                <span>from: <Date input={start.toJSDate()}/></span>
                <span>end: <Date input={end.toJSDate()}/></span>
            </Group>
            {/*
                Stack is necessary to keep Grid in place properly or it shrinks and renders bad.
            */}
            <Stack
                className={classes.calendar}
            >
                {/*
                    First of all: render header with all days of week; they're already localised from
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
            </Stack>
        </Stack>
    </Container>;
};
