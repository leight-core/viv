import {
    DateInline,
    useTranslation
}                    from "@leight/i18n-client";
import {classNames}  from "@leight/utils-client";
import {
    Box,
    Breadcrumbs,
    Container,
    createStyles,
    Grid,
    Group,
    LoadingOverlay,
    Overlay,
    Tooltip
}                    from "@mantine/core";
import {
    IconCalendarEvent,
    IconChartDonut2,
    IconChevronDown,
    IconChevronUp,
    IconCurrentLocation
}                    from "@tabler/icons-react";
import {
    ComponentProps,
    type FC,
    useState
}                    from "react";
import {useCalendar} from "../context";
import {Months}      from "./Months";

const useStyles = createStyles(theme => ({
    calendar: {
        "& .secondary":         {
            color: theme.colors["gray"][5],
        },
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
                "& .icon":       {
                    color: theme.colors["gray"][7],
                },
            },
        },
        "& .right":           {
            display:        "flex",
            flex:           "1 1 auto",
            justifyContent: "end",
            alignItems:     "center",
        },
        "& .icon":            {
            color:     theme.colors["gray"][5],
            cursor:    "pointer",
            "&:hover": {
                color: theme.colors["gray"][7],
            },
        },
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

export interface ICalendarProps extends Omit<ComponentProps<typeof Box>, "children"> {
    withControls?: boolean;
    weekCountSize?: number;
    highlightToday?: boolean;
    columnSize?: number;
    isLoading?: boolean;
}

export const Calendar: FC<ICalendarProps> = (
    {
        withControls = true,
        highlightToday = true,
        weekCountSize = 2,
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
              today,
              weeks: {
                         weeks,
                         days,
                         start,
                         end,
                         isCurrent,
                     }
          }                                 = useCalendar(({
                                                               weeks,
                                                               nextMonth,
                                                               prevMonth,
                                                               isLoading,
                                                               today,
                                                           }) => ({
        weeks,
        nextMonth,
        prevMonth,
        isLoading,
        today,
    }));
    const [isSelectMonth, setIsSelectMonth] = useState(false);
    const [withWeeks, setWithWeeks]         = useState(false);
    /**
     * This is specific for Mantine Grid: compute number of columns to render.
     */
    const columnCount                       = (days.length * columnSize) + (withWeeks ? weekCountSize : 0);
    const {t}                               = useTranslation("common");
    const {classes}                         = useStyles();
    const controlColumnCount                = 18;
    const controlWidth                      = 6;

    return <Container
        className={classes.calendar}
    >
        <Box
            pos={"relative"}
            {...props}
        >
            {isSelectMonth && <Overlay
                color={"#FFF"}
                opacity={0.75}
            >
                <Months/>
            </Overlay>}
            <LoadingOverlay
                visible={$isLoading !== undefined ? $isLoading : isLoading}
            />
            {withControls && <Grid
                columns={controlColumnCount}
                className={classNames(
                    classes.controls,
                    classes.controlPrefix,
                )}
                m={0}
            >
                <Grid.Col
                    span={controlWidth}
                    className={"left"}
                >
                    <Breadcrumbs
                        separator={"→"}
                        className={"secondary"}
                    >
                        <DateInline input={start.toJSDate()} options={{day: "numeric", month: "numeric"}}/>
                        <DateInline input={end.toJSDate()}/>
                    </Breadcrumbs>
                </Grid.Col>
                <Grid.Col
                    span={controlColumnCount - (controlWidth * 2)}
                    className={"middle"}
                    onClick={() => prevMonth()}
                >
                    <IconChevronUp className={"icon"}/>
                </Grid.Col>
                <Grid.Col
                    span={controlWidth}
                    className={"right"}
                >
                    <Group spacing={"sm"}>
                        {!isCurrent && <Tooltip label={t("calendar.today.icon.tooltip", "Today")}>
                            <IconCurrentLocation
                                className={"icon"}
                                onClick={() => today()}
                            />
                        </Tooltip>}
                        <Tooltip label={t("calendar.with-weeks.icon.tooltip", "Week numbers")}>
                            <IconCalendarEvent
                                className={"icon"}
                                onClick={() => setWithWeeks(weeks => !weeks)}
                            />
                        </Tooltip>
                        <Tooltip label={t("calendar.select-month.icon.tooltip", "Select month")}>
                            <IconChartDonut2
                                className={"icon"}
                                onClick={() => setIsSelectMonth(select => !select)}
                            />
                        </Tooltip>
                    </Group>
                </Grid.Col>
            </Grid>}
            {/*
                First of all: render header with all days of the week; they're already localised from
                the calendar, so it's just simple render here.
             */}
            <Grid
                columns={columnCount}
                className={classes.weekRow}
                m={0}
            >
                {withWeeks && <Grid.Col
                    span={weekCountSize}
                    className={classes.header}
                >
                    <Tooltip label={t("calendar.weeks-numbers.icon.tooltip", "Week no.")}>
                        <IconCalendarEvent className={"secondary"}/>
                    </Tooltip>
                </Grid.Col>}
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
                m={0}
            >
                {withWeeks && <Grid.Col
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
                        current && highlightToday ? classes.currentDay : undefined,
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
                columns={controlColumnCount}
                className={classNames(
                    classes.controls,
                    classes.controlSuffix,
                )}
                m={0}
            >
                <Grid.Col
                    span={controlWidth}
                    className={"left"}
                >
                    <Breadcrumbs
                        separator={"→"}
                        className={"secondary"}
                    >
                        <DateInline input={end.plus({day: 1}).toJSDate()} options={{day: "numeric", month: "numeric"}}/>
                        <DateInline input={end.plus({day: 1}).endOf("month").toJSDate()}/>
                    </Breadcrumbs>
                </Grid.Col>
                <Grid.Col
                    span={controlColumnCount - (controlWidth * 2)}
                    className={"middle"}
                    onClick={() => nextMonth()}
                >
                    <IconChevronDown className={"icon"}/>
                </Grid.Col>
                <Grid.Col
                    span={controlWidth}
                    className={"right"}
                />
            </Grid>}
        </Box>
    </Container>;
};
