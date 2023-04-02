import {DateTime}   from "@leight/i18n";
import {
    DateInline,
    useTranslation
}                   from "@leight/i18n-client";
import {classNames} from "@leight/utils-client";
import {
    ActionIcon,
    Button,
    Container,
    createStyles,
    Grid,
    Group,
    Text,
    Tooltip
}                   from "@mantine/core";
import {
    IconCalendarEvent,
    IconChevronLeft,
    IconChevronRight,
    IconChevronsLeft,
    IconChevronsRight
}                   from "@tabler/icons-react";
import {
    type ComponentProps,
    type FC,
    useState
}                   from "react";
import {useWeeks}   from "../context";

const useStyles = createStyles(theme => ({
    weeks:          {
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

export interface IWeeksProps extends Omit<ComponentProps<typeof Container>, "children"> {
    withControls?: boolean;
    weekCountSize?: number;
    columnSize?: number;
    highlightToday?: boolean;
}

export const Weeks: FC<IWeeksProps> = (
    {
        withControls = true,
        highlightToday = true,
        weekCountSize = 2,
        columnSize = 3,
        ...props
    }) => {
    const {classes}                 = useStyles();
    const {
              nextMonth,
              prevMonth,
              prevYear,
              nextYear,
              today,
              weeks: {
                         weeks,
                         days,
                         start,
                         end,
                         isCurrent,
                     }
          }                         = useWeeks();
    const [withWeeks, setWithWeeks] = useState(false);
    /**
     * This is specific for Mantine Grid: compute number of columns to render.
     */
    const columnCount               = (days.length * columnSize) + (withWeeks ? weekCountSize : 0);
    const {t}                       = useTranslation("calendar");
    const controlColumnCount        = 18;
    const controlWidth              = 7;

    return <Container
        className={classes.weeks}
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
                <Group spacing={"sm"}>
                    <ActionIcon variant={"subtle"}>
                        <IconChevronsLeft/>
                    </ActionIcon>
                    <Button.Group>
                        <Button
                            size={"sm"}
                            variant={"subtle"}
                            onClick={() => prevMonth()}
                            leftIcon={<IconChevronLeft/>}
                        >
                            <DateInline
                                input={start.minus({month: 1}).toJSDate()}
                                options={{month: "long"}}
                            />
                        </Button>
                        <Button
                            size={"sm"}
                            variant={"subtle"}
                            onClick={() => prevYear()}
                        >
                            <DateInline
                                input={start.minus({year: 1}).toJSDate()}
                                options={{year: "numeric"}}
                            />
                        </Button>
                    </Button.Group>
                </Group>
            </Grid.Col>
            <Grid.Col
                span={controlColumnCount - (controlWidth * 2)}
                className={classNames(
                    classes.controls,
                    classes.controlsMiddle,
                )}
            >
                <Group spacing={"sm"}>
                    <Button
                        variant={"subtle"}
                        onClick={() => today()}
                        disabled={isCurrent}
                    >
                        <Text c={"dimmed"}>
                            {isCurrent ?
                                <DateInline input={DateTime.now().toJSDate()} options={{day: "numeric", month: "long", year: "numeric"}}/> :
                                <DateInline input={start.toJSDate()} options={{month: "long", year: "numeric"}}/>
                            }
                        </Text>
                    </Button>
                </Group>
            </Grid.Col>
            <Grid.Col
                span={controlWidth}
                className={classNames(
                    classes.controls,
                    classes.controlsRight,
                )}
            >
                <Group spacing={"sm"}>
                    <Button.Group>
                        <Button
                            size={"sm"}
                            variant={"subtle"}
                            onClick={() => nextYear()}
                        >
                            <DateInline
                                input={start.plus({year: 1}).toJSDate()}
                                options={{year: "numeric"}}
                            />
                        </Button>
                        <Button
                            size={"sm"}
                            variant={"subtle"}
                            onClick={() => nextMonth()}
                            rightIcon={<IconChevronRight/>}
                        >
                            <DateInline
                                input={start.plus({month: 1}).toJSDate()}
                                options={{month: "long"}}
                            />
                        </Button>
                    </Button.Group>
                    <ActionIcon variant={"subtle"}>
                        <IconChevronsRight/>
                    </ActionIcon>
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
                <Tooltip label={t("weeks-numbers.icon.tooltip", "Week no.")}>
                    <ActionIcon variant={"light"}>
                        <IconCalendarEvent/>
                    </ActionIcon>
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
                <ActionIcon
                    variant={"subtle"}
                    onClick={() => setWithWeeks(weeks => !weeks)}
                >
                    <IconCalendarEvent/>
                </ActionIcon>
            </Grid.Col>
            <Grid.Col
                span={controlColumnCount - (controlWidth * 2)}
                className={classNames(
                    classes.controls,
                    classes.controlsMiddle,
                )}
            >
                <Text c={"dimmed"}>
                    <DateInline input={start.toJSDate()} options={{month: "long", year: "numeric"}}/>
                </Text>
            </Grid.Col>
            <Grid.Col
                span={controlWidth}
                className={classNames(
                    classes.controls,
                    classes.controlsRight,
                )}
            />
        </Grid>}
    </Container>;
};
