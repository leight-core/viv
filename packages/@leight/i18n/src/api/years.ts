import {
    type DateTime,
    type Interval
} from "luxon";

export interface IYear {
    /**
     * ID of a year; unique within years, can be used as a React key
     */
    id: string;
    /**
     * Year number
     */
    name: number;
    /**
     * Beginning of the year
     */
    year: DateTime;
    /**
     * Is this year current?
     */
    isCurrent: boolean;
}

export interface IYears {
    /**
     * Input date a calendar is generated of
     */
    input: DateTime;
    /**
     * Start date of the generated calendar
     */
    start: DateTime;
    /**
     * Final date of the generated calendar
     */
    end: DateTime;
    /**
     * Interval based on start/end for querying dates.
     */
    interval: Interval;
    columns: number;
    rows: number;
    /**
     * Is the "now" in a current calendar interval?
     */
    isCurrent: boolean;
    /**
     * Just for convenience - actual timestamp
     */
    now: DateTime;
    /**
     * Simple list of years
     */
    list: number[];
    years: IYear[];
}
