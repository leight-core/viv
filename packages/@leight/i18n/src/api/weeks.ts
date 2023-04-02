import {
    type DateTime,
    type Interval
} from "luxon";

export interface IDay {
    /**
     * ID of a day; unique within years, can be used as a React key
     */
    id: string;
    /**
     * Current date
     */
    day: DateTime;
    /**
     * Is this day "today"?
     */
    isCurrent: boolean;
    /**
     * Is this day outside the current (input) month?
     */
    isOutOfRange: boolean;
}

export interface IWeek {
    /**
     * ID of a week; unique within years, can be used as a React key
     */
    id: string;
    /**
     * Beginning of the week
     */
    week: DateTime;
    /**
     * Week number
     */
    number: number;
    /**
     * Is this week current?
     */
    isCurrent: boolean;
    /**
     * 0-6 dayjs in a week
     */
    days: IDay[];
}

export interface IWeeks {
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
    /**
     * Is the "now" in a current calendar interval?
     */
    isCurrent: boolean;
    /**
     * Just for convenience - actual timestamp
     */
    now: DateTime;
    /**
     * Number of lines of the calendar (number of weeks); each wek has 7 days
     */
    weeks: IWeek[];
    /**
     * Contains localized day names (in a localized order)
     */
    days: string[];
}
