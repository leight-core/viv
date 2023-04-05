import {
    type IYears,
    yearsOf
}                           from "@leight/calendar";
import {createStoreContext} from "@leight/context-client";
import {DateTime}           from "@leight/i18n";
import {type IStoreProps}   from "@leight/zustand";
import {
    type ComponentProps,
    type FC
}                           from "react";

export type IYearsStoreStoreProps = IStoreProps<{
    /**
     * Set years of the given date
     */
    yearsOf(date: DateTime): void;
    /**
     * Move to the current year
     */
    today(): void;
    /**
     * Move to the previous year (floating years)
     */
    prevYear(): void;
    /**
     * Move to the next year (floating years)
     */
    nextYear(): void;
    /**
     * Move to the previous "page" of years
     */
    prevYears(): void;
    /**
     * Move to the next "page" of years
     */
    nextYears(): void;
}, {
    /**
     * Calendar is computed based on an input, so it cannot be required
     * in the time of store creation.
     */
    readonly years: IYears;
}>

export const YearsOfStore = createStoreContext<IYearsStoreStoreProps>({
    state: ({state}) => (set) => ({
        yearsOf(date: DateTime) {
            set({
                years: yearsOf({date}),
            });
        },
        today() {
            set({
                years: yearsOf({date: DateTime.now()}),
            });
        },
        prevYear() {
            set(({years: {date}}) => ({
                years: yearsOf({date: date.minus({year: 1})}),
            }));
        },
        nextYear() {
            set(({years: {date}}) => ({
                years: yearsOf({date: date.plus({year: 1})}),
            }));
        },
        prevYears() {
            set(({years: {count, date}}) => ({
                years: yearsOf({date: date.minus({year: count})}),
            }));
        },
        nextYears() {
            set(({years: {count, date}}) => ({
                years: yearsOf({date: date.plus({year: count})}),
            }));
        },
        ...state,
    }),
    name:  "YearsContext",
    hint:  "Add CalendarProvider or YearsProvider.",
});

export interface IYearsProviderProps extends Omit<ComponentProps<typeof YearsOfStore["Provider"]>, "state"> {
    date?: DateTime;
}

export const YearsProvider: FC<IYearsProviderProps> = ({date, ...props}) => {
    return <YearsOfStore.Provider
        state={{
            years: yearsOf({date}),
        }}
        {...props}
    />;
};
