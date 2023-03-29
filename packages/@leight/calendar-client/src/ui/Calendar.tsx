import {
    DateTime,
    Info,
    useCalendar
}                from "@leight/i18n";
import {Date}    from "@leight/i18n-client";
import {
    createStyles,
    Grid,
    Group
}                from "@mantine/core";
import {type FC} from "react";

const useStyles = createStyles(theme => ({
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
    const columns   = (7 * columnSize) + weekCountSize;
    const {classes} = useStyles();

    const {start, end, weeks} = useCalendar({
        input,
    });

    return <>
        <Group>
            <span>input: <Date input={input.toJSDate()}/></span>
            <span>from: <Date input={start.toJSDate()}/></span>-
            <span>end: <Date input={end.toJSDate()}/></span>
        </Group>

        <Grid columns={columns}>
            {weekCountSize > 0 && <Grid.Col span={weekCountSize}/>}
            {Info.weekdays("long").map(day => <Grid.Col
                key={`day-${day}`}
                span={columnSize}
            >
                <h3>{day}</h3>
            </Grid.Col>)}
        </Grid>
        {weeks.map(({days, number, current, id}) => <Grid
            key={id}
            columns={columns}
            align={"end"}
            className={current ? classes.currentWeek : undefined}
        >
            {weekCountSize > 0 && <Grid.Col
                span={weekCountSize}
            >
                {number}.
            </Grid.Col>}
            {days.map(({day, current, outOfRange, id}) => <Grid.Col
                key={id}
                span={columnSize}
                sx={{
                    height:  "8em",
                    padding: "0.2em 0.4em",
                }}
                className={current ? classes.currentDay : (outOfRange ? classes.outOfRange : classes.inRange)}
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
    </>;
};
