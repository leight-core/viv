import {type IDay}    from "@leight/calendar";
import {DateTime}     from "@leight/i18n";
import {DateInline}   from "@leight/i18n-client";
import {classNames}   from "@leight/utils-client";
import {
    ActionIcon,
    Button,
    Grid,
    Group,
    Text
}                     from "@mantine/core";
import {
    IconCalendarEvent,
    IconChevronLeft,
    IconChevronRight,
    IconChevronsLeft,
    IconChevronsRight
}                     from "@tabler/icons-react";
import {
    type FC,
    type PropsWithChildren,
    useState
}                     from "react";
import {WeeksOfStore} from "../context";
import {
    CalendarShell,
    type ICalendarShellProps
}                     from "./CalendarShell";

export type IWeeksProps = PropsWithChildren<Omit<ICalendarShellProps, "children" | "onClick"> & {
    onClick?(props: IWeeksProps.IOnClickProps): void;

    weekCountSize?: number;
    defaultWithWeekNo?: boolean;
    columnSize?: number;
    highlightToday?: boolean;
}>

export namespace IWeeksProps {
    export interface IOnClickProps {
        day: IDay;
    }
}

export const Weeks: FC<IWeeksProps> = (
    {
        onClick,
        highlightToday = true,
        defaultWithWeekNo = false,
        weekCountSize = 2,
        columnSize = 3,
        children,
        ...props
    }) => {
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
                         isCurrent,
                     }
          }                         = WeeksOfStore.useState();
    const [withWeeks, setWithWeeks] = useState(defaultWithWeekNo);
    /**
     * This is specific for Mantine Grid: compute number of columns to render.
     */
    const columnCount               = (days.length * columnSize) + (withWeeks ? weekCountSize : 0);

    return <CalendarShell
        controlsTopLeft={<Group spacing={"sm"}>
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
                    leftIcon={<IconChevronsLeft/>}
                >
                    <DateInline
                        input={start.minus({year: 1}).toJSDate()}
                        options={{year: "numeric"}}
                    />
                </Button>
            </Button.Group>
        </Group>}
        controlsTopMiddle={<Group spacing={"sm"}>
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
        </Group>}
        controlsTopRight={<Group spacing={"sm"}>
            <Button.Group>
                <Button
                    size={"sm"}
                    variant={"subtle"}
                    onClick={() => nextYear()}
                    rightIcon={<IconChevronsRight/>}
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
        </Group>}
        controlsBottomLeft={<ActionIcon
            variant={"subtle"}
            onClick={() => setWithWeeks(weeks => !weeks)}
        >
            <IconCalendarEvent/>
        </ActionIcon>}
        {...props}
    >
        {({classes}) => <>
            {/*
                First of all: render header with all days of the week; they're already localised from
                the calendar, so it's just simple render here.
             */}
            <Grid
                columns={columnCount}
                className={classNames(
                    classes.calendarGrid,
                    classes.row,
                )}
                m={0}
            >
                {withWeeks && <Grid.Col
                    span={weekCountSize}
                    className={classes.header}
                >
                    <ActionIcon variant={"light"}>
                        <IconCalendarEvent/>
                    </ActionIcon>
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
            {weeks.map(({days, number, isCurrent, id}) => <Grid
                key={id}
                columns={columnCount}
                className={classNames(
                    classes.calendarGrid,
                    classes.row,
                    isCurrent ? classes.currentWeek : undefined,
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
                {days.map(day => <Grid.Col
                    key={day.id}
                    span={columnSize}
                    className={classNames(
                        classes.cell,
                        day.isCurrent && highlightToday ? classes.currentDay : undefined,
                        day.isOutOfRange ? classes.outOfRange : classes.inRange
                    )}
                    style={onClick ? {cursor: "pointer"} : undefined}
                    onClick={() => onClick?.({day})}
                >
                    <div
                        style={{
                            textAlign: "right",
                        }}
                    >
                        {/*
                            Doesn't look this funny?
                        */}
                        {day.day.day}
                    </div>
                </Grid.Col>)}
            </Grid>)}
            {children}
        </>}
    </CalendarShell>;
};
