import {type IDay}     from "@leight/calendar";
import {DateTime}      from "@leight/i18n";
import {DateInline}    from "@leight/i18n-client";
import {classNames}    from "@leight/utils-client";
import {
    ActionIcon,
    Button,
    Grid,
    Group,
    Overlay,
    Stack,
    Text
}                      from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {
    IconCalendarEvent,
    IconChevronLeft,
    IconChevronRight,
    IconChevronsLeft,
    IconChevronsRight,
    IconX
}                      from "@tabler/icons-react";
import {
    type FC,
    type PropsWithChildren,
    ReactNode,
    useRef,
    useState
}                      from "react";
import {
    CalendarItemsStore,
    WeeksOfStore
}                      from "../context";
import {
    CalendarShell,
    type ICalendarShellProps
}                      from "./CalendarShell";

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
                         list,
                         start,
                         isCurrent,
                     }
          }                                                     = WeeksOfStore.useState();
    const items                                                 = CalendarItemsStore.useOptionalState();
    const [isOverlay, {open: openOverlay, close: closeOverlay}] = useDisclosure(false);
    const overlay                                               = useRef<ReactNode>();
    const [withWeeks, setWithWeeks]                             = useState(defaultWithWeekNo);
    const withOverlay                                           = (children: ReactNode) => {
        overlay.current = children;
        openOverlay();
    };
    /**
     * This is specific for Mantine Grid: compute number of columns to render.
     */
    const columnCount                                           = (list.length * columnSize) + (withWeeks ? weekCountSize : 0);

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
                        date={start.minus({month: 1})}
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
                        date={start.minus({year: 1})}
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
                        <DateInline date={DateTime.now()} options={{day: "numeric", month: "long", year: "numeric"}}/> :
                        <DateInline date={start} options={{month: "long", year: "numeric"}}/>
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
                        date={start.plus({year: 1})}
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
                        date={start.plus({month: 1})}
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
            {isOverlay && <Overlay color={"#FFF"} opacity={1}>
                <Group position={"apart"}>
                    <div/>
                    <ActionIcon
                        variant={"subtle"}
                        onClick={() => closeOverlay()}
                    >
                        <IconX/>
                    </ActionIcon>
                </Group>
                {overlay.current}
            </Overlay>}
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
                {list.map(day => <Grid.Col
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
                        day.isOutOfRange ? classes.outOfRange : classes.inRange,
                    )}
                    style={onClick ? {cursor: "pointer"} : undefined}
                    onClick={() => {
                        withOverlay(<h1>{day.id}</h1>);
                        onClick?.({day});
                    }}
                >
                    <Stack
                        justify={"space-between"}
                        style={{height: "100%", padding: "0 0.3em"}}
                    >
                        <Group position={"apart"}>
                            <Group spacing={0}>
                                <ActionIcon size={"sm"}>
                                    <IconCalendarEvent/>
                                </ActionIcon>
                            </Group>
                            {day.day.day}
                        </Group>
                    </Stack>
                </Grid.Col>)}
            </Grid>)}
            {children}
        </>}
    </CalendarShell>;
};
