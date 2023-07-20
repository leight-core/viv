"use client";

import {
    createStore,
    type IStoreProps
}                        from "@leight/store";
import {
    DateTime,
    type DateTimeFormatOptions
}                        from "luxon";
import {type IDateInput} from "../utils/IDateInput";
import {iso2locale}      from "../utils/iso2locale";

/**
 * Store shape for date time context.
 */
export type IDateTimeStoreProps = IStoreProps<{
    /**
     * Take input string in ISO format and reformat it into the user's locale.
     */
    toLocalDate(date?: IDateInput, fallback?: IDateInput, opts?: DateTimeFormatOptions): string | undefined;
    /**
     * Take input string in ISO format and return localized date & time
     */
    toLocalDateTime(date?: IDateInput, fallback?: IDateInput, opts?: DateTimeFormatOptions): string | undefined;
    toUtcDateTime(date?: IDateInput): string | undefined;
    toUtcDate(date?: IDateInput): string | undefined;
}, {
    locale: string;
}>

export const DateTimeStore = createStore<IDateTimeStoreProps>({
    state: ({state}) => () => ({
        toLocalDate(date, fallback, opts = DateTime.DATE_MED) {
            return iso2locale(date, fallback, opts);
        },
        toLocalDateTime(date, fallback, opts = DateTime.DATETIME_MED) {
            return iso2locale(date, fallback, opts);
        },
        toUtcDateTime() {
            console.error("Not supported yet!");
            return undefined;
        },
        toUtcDate() {
            console.error("Not supported yet!");
            return undefined;
        },
        ...state,
    }),
    name:  "DateTimeStore",
    hint:  "Add DateTimeStore.Provider.",
});
