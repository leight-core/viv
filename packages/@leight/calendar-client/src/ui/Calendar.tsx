import {
    DateTime,
    useCalendar
}                   from "@leight/i18n";
import {Date}       from "@leight/i18n-client";
import {classNames} from "@leight/utils-client";
import {
    Container,
    createStyles,
    Grid,
    Group,
    Stack
}                   from "@mantine/core";
import {type FC}    from "react";

const useStyles = createStyles(theme => ({
    header:      {
        backgroundColor: theme.colors["gray"][1],
        height:          "5em",
        display:         "flex",
        flex:            "1 1 auto",
        justifyContent:  "center",
        alignItems:      "center",
    },
    day:         {
        // height: "8em",
        // padding: "0.2em 0.4em",
        // border:      "1px solid #333",
        // '& :hover': {
        //     backgroundColor: theme.colors["gray"][9],
        // },
    },
    weekRow:     {
        border:       "1px solid",
        borderColor:  theme.colors["gray"][4],
        borderBottom: "none",
    },
    currentWeek: {},
    currentDay:  {
        backgroundColor: theme.colors["gray"][4],
    },
    inRange:     {
        fontWeight: "bold",
    },
    outOfRange:  {
        backgroundColor: theme.colors["gray"][2],
        opacity:         0.5,
    },
}));

export interface ICalendarProps {
    weekCountSize?: number;
    columnSize?: number;
    input?: DateTime;
}

export const Calendar: FC<ICalendarProps> = ({weekCountSize = 0, columnSize = 3, input = DateTime.now().plus({month: 0})}) => {
    const {start, end, weeks, days} = useCalendar({
        input,
    });
    const columns                   = (days.length * columnSize) + weekCountSize;
    const {classes}                 = useStyles();

    return <Container>
        <Stack>
            <Group>
                <span>input: <Date input={input.toJSDate()}/></span>
                <span>from: <Date input={start.toJSDate()}/></span>
                <span>end: <Date input={end.toJSDate()}/></span>
            </Group>
            <Grid
                columns={columns}
                className={classNames(
                    classes.weekRow,
                )}
            >
                {weekCountSize > 0 && <Grid.Col span={weekCountSize}/>}
                {days.map(day => <Grid.Col
                    key={`day-${day}`}
                    span={columnSize}
                    className={classNames(
                        classes.header,
                    )}
                >
                    {day}
                </Grid.Col>)}
            </Grid>
            {weeks.map(({days, number, current, id}) => <Grid
                key={id}
                columns={columns}
                align={"end"}
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
    </Container>;
};
