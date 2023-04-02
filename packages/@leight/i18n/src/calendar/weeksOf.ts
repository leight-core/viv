import {
    DateTime,
    Info,
    Interval,
    type StringUnitLength
}                    from "luxon";
import {type IWeeks} from "../api";

export interface IWeeksOfProps {
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
 * Generates calendar based on the given input - weeks in the month of the input.
 */
export const weeksOf = (
    {
        input = DateTime.now(),
        margin = 0,
        marginPlus,
        marginMinus,
        dayFormat = "short"
    }: IWeeksOfProps = {
        input:     DateTime.now(),
        margin:    1,
        dayFormat: "short",
    }): IWeeks => {
    const start     = input.startOf("month").minus({week: marginMinus || margin});
    const end       = input.endOf("month").plus({week: marginPlus || margin});
    const interval  = Interval.fromDateTimes(start, end);
    const length    = Math.max(interval.count("weeks"), 6);
    const weekStart = start.startOf("week");
    const now       = DateTime.now();
    return {
        input,
        now,
        start,
        end,
        interval,
        get isCurrent() {
            return interval.contains(now);
        },
        get days() {
            return Info.weekdays(dayFormat);
        },
        get weeks() {
            return Array.from({length}, (_, week) => {
                const $week = weekStart.plus({week});
                const id    = `${$week.year}${$week.weekNumber}`;
                return {
                    id,
                    week:      $week,
                    number:    $week.weekNumber,
                    isCurrent: $week.weekNumber === now.weekNumber && $week.year === now.year,
                    get days() {
                        return Array.from({length: 7}, (_, day) => {
                            const $day = $week.plus({day: day});
                            return {
                                id:           `${id}${day}`,
                                day:          $day,
                                isCurrent:    !Math.floor(now.diff($day, "day").days),
                                isOutOfRange: $day.month !== input.month || $day.year !== input.year,
                            };
                        });
                    },
                };
            });
        },
    };
};
