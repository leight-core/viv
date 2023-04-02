import {
    DateTime,
    Interval
}                    from "luxon";
import {type IYears} from "../api";

export interface IYearsOfProps {
    /**
     * Input date - years of the year will be generated
     */
    input?: DateTime;
}

export const yearsOf = (
    {
        input = DateTime.now(),
    }: IYearsOfProps): IYears => {
    const margin   = 4;
    const start    = input.minus({year: margin});
    const end      = input.plus({year: margin});
    const interval = Interval.fromDateTimes(start, end);
    const length   = interval.count("years");
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
            return Array.from({length}, (_, year) => start.year + year);
        },
        get years() {
            return Array.from({length}, (_, year) => {
                const $year = start.plus({year});
                const id    = `${$year.year}`;
                return {
                    id,
                    name:      $year.year,
                    year:      $year,
                    isCurrent: input.year === $year.year,
                };
            });
        },
    };
};
