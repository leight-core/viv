import {
    DateTime,
    Info,
    Interval,
    type StringUnitLength
}                       from "luxon";
import {type ICalendar} from "../api";

export interface ICalendarOfProps {
    /**
     * Input date around which a calendar should be generated
     */
    input?: DateTime;
    /**
     * Margin in weeks (defaults to (-1 -> +1); specific margin overrides this value (for example
     * "marginPlus: 2" and "margin: 1" makes look ahead 2 weeks (from marginPlus), and look behind 1 week (from
     * margin itself).
     */
    margin?: number;
    /**
     * Positive number of weeks to look ahead
     */
    marginPlus?: number;
    /**
     * Positive number of weeks to look behind
     */
    marginMinus?: number;
    dayFormat?: StringUnitLength;
}

/**
 * Generate calendar for rendering; it's built on Gregorian calendar.
 */
export const calendarOf = (
    {
        input = DateTime.now(),
        margin = 0,
        marginPlus,
        marginMinus,
        dayFormat = "short"
    }: ICalendarOfProps = {
        input:     DateTime.now(),
        margin:    1,
        dayFormat: "short",
    }): ICalendar => {
    const start     = input.startOf("month").minus({week: marginMinus || margin});
    const end       = input.endOf("month").plus({week: marginPlus || margin});
    const length    = Math.max(Interval.fromDateTimes(start, end).count("weeks"), 6);
    const weekStart = start.startOf("week");
    const now       = DateTime.now();
    return {
        input,
        now,
        start,
        end,
        get days() {
            return Info.weekdays(dayFormat);
        },
        get weeks() {
            return Array.from({length}, (_, week) => {
                const $week = weekStart.plus({week});
                const id    = `${$week.year}${$week.weekNumber}`;
                return {
                    id,
                    week:    $week,
                    number:  $week.weekNumber,
                    current: $week.weekNumber === now.weekNumber,
                    get days() {
                        return Array.from({length: 7}, (_, day) => {
                            const $day = $week.plus({day: day});
                            return {
                                id:         `${id}${day}`,
                                day:        $day,
                                current:    !Math.floor(now.diff($day, "day").days),
                                outOfRange: $day.month !== input.month || $day.year !== input.year,
                            };
                        });
                    },
                };
            });
        },
    };
};
