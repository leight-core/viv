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
    const columns  = 5;
    const rows     = 3;
    const margin   = ((columns - 1) / 2) + (((rows - 1) / 2) * columns);
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
        columns,
        rows,
        now,
        get isCurrent() {
            return now.year >= start.year && now.year <= end.year;
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
                    isCurrent: now.year === $year.year,
                };
            });
        },
    };
};
