import {type DateTime} from "luxon";

/**
 * Which types are accepted as input type for formatting functions.
 */
export type IDateInput =
    string
    | Date;

/**
 * Type for useTranslation() `t` function.
 */
export type IWithTranslator = (text: string | string[], valuesOrDefault?: Record<string, any> | string, values?: Record<string, any> | string) => string;

export interface IWithTranslation {
    label?: string;
    namespace?: string;
    values?: Record<string, unknown>;
}

/**
 * Just marks an input using a locale.
 */
export interface IWithLocale {
    locale: string;
}

export interface IDay {
    /**
     * Id of a day; unique within years, can be used as a React key
     */
    id: string;
    /**
     * Current date
     */
    day: DateTime;
    /**
     * Is this day "today"?
     */
    current: boolean;
}

export interface IWeek {
    /**
     * Id of a week; unique within years, can be used as a React key
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
    current: boolean;
    /**
     * 0-6 dayjs in a week
     */
    days: IDay[];
}

export interface ICalendar {
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
     * Just for convenience - actual timestamp
     */
    now: DateTime;
    /**
     * Number of lines of the calendar (number of weeks); each wek has 7 days
     */
    weeks: IWeek[];
}
