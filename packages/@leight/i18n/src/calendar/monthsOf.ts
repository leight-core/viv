import {
    DateTime,
    Info,
    Interval,
    StringUnitLength
}                     from "luxon";
import {type IMonths} from "../api";

export interface IMonthsOfProps {
    /**
     * Input date - months of the year will be generated
     */
    input?: DateTime;
    monthFormat?: StringUnitLength;
}

export const monthsOf = (
    {
        input = DateTime.now(),
        monthFormat = "long",
    }: IMonthsOfProps): IMonths => {
    const start    = input.startOf("year");
    const end      = input?.endOf("year");
    const interval = Interval.fromDateTimes(start, end);
    const length   = interval.count("months");
    const now      = DateTime.now();

    return {
        input,
        start,
        end,
        interval,
        now,
        get isCurrent() {
            return interval.contains(now);
        },
        get list() {
            return Info.months(monthFormat);
        },
        get months() {
            return Array.from({length}, (_, month) => {
                const $month = start.plus({month});
                const id     = `${$month.year}${$month.month}`;
                return {
                    id,
                    name:      $month.toLocaleString({month: "long"}),
                    month:     $month,
                    number:    $month.month,
                    isCurrent: input?.year === $month.year && input?.month === $month.month,
                };
            });
        },
    };
};
