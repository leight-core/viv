import {
    DateTime,
    Interval
}                       from "luxon";
import {useMemo}        from "react";
import {type ICalendar} from "../api";

export interface ICalendarOfProps {
    /**
     * Input date around which a calendar should be generated
     */
    input?: DateTime;
    /**
     * Margin in weeks (defaults to (-1 -> +1)
     */
    margin?: number;
}

/**
 * Generate calendar for rendering; it's built on Gregorian calendar.
 */
export const calendarOf = ({input = DateTime.now(), margin = 1}: ICalendarOfProps = {input: DateTime.now(), margin: 1}): ICalendar => {
    const start     = input.startOf("month").minus({week: margin});
    const end       = input.endOf("month").plus({week: margin});
    const weekStart = start.startOf("week");
    const now       = DateTime.now();
    return {
        input,
        now,
        start,
        end,
        weeks: Array.from({length: Interval.fromDateTimes(start, end).count("weeks")}, (_, week) => {
            const $week = weekStart.plus({week});
            const id    = `${$week.year}${$week.weekNumber}`;
            return {
                id,
                week:    $week,
                number:  $week.weekNumber,
                current: $week.weekNumber === now.weekNumber,
                days:    Array.from({length: 7}, (_, day) => {
                    const $day = $week.plus({day: day});
                    return {
                        id:      `${id}${day}`,
                        day:     $day,
                        current: !Math.floor(now.diff($day, "day").days),
                    };
                }),
            };
        }),
    };
};

export const useCalendar = (props?: ICalendarOfProps): ICalendar => {
    return useMemo(() => calendarOf(props), [
        (props?.input || DateTime.now()).toISODate({format: "basic"}),
        props?.margin || 1,
    ]);
};
