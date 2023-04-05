import {
    type IWeeks,
    weeksOf
}                           from "@leight/calendar";
import {createStoreContext} from "@leight/context-client";
import {DateTime}           from "@leight/i18n";
import {type IStoreProps}   from "@leight/zustand";
import {
    type ComponentProps,
    type FC
}                           from "react";

export type IWeeksStoreStoreProps = IStoreProps<{
    /**
     * Set weeks of the given date
     */
    weeksOf(date: DateTime): void;
    /**
     * Move to the current month
     */
    today(): void;
    /**
     * Change weeks to the previous month
     */
    prevMonth(): void;
    /**
     * Change weeks to the next month
     */
    nextMonth(): void;
    prevYear(): void;
    nextYear(): void;
}, {
    /**
     * Calendar is computed based on an input, so it cannot be required
     * in the time of store creation.
     */
    readonly weeks: IWeeks;
}>

export const WeeksOfStore = createStoreContext<IWeeksStoreStoreProps>({
    state: ({state}) => (set) => ({
        weeksOf(date: DateTime) {
            set({
                weeks: weeksOf({date}),
            });
        },
        today() {
            set({
                weeks: weeksOf({date: DateTime.now()}),
            });
        },
        prevMonth() {
            set(({weeks: {date}}) => ({
                weeks: weeksOf({date: date.minus({month: 1})}),
            }));
        },
        nextMonth() {
            set(({weeks: {date}}) => ({
                weeks: weeksOf({date: date.plus({month: 1})}),
            }));
        },
        prevYear() {
            set(({weeks: {date}}) => ({
                weeks: weeksOf({date: date.minus({year: 1})}),
            }));
        },
        nextYear() {
            set(({weeks: {date}}) => ({
                weeks: weeksOf({date: date.plus({year: 1})}),
            }));
        },
        ...state,
    }),
    name:  "WeeksOfStore",
    hint:  "Add WeeksOfProvider or CalendarProvider.",
});

export interface IWeeksOfProviderProps extends Omit<ComponentProps<typeof WeeksOfStore["Provider"]>, "state"> {
    date?: DateTime;
}

export const WeeksOfProvider: FC<IWeeksOfProviderProps> = ({date, ...props}) => {
    return <WeeksOfStore.Provider
        state={{
            weeks: weeksOf({date}),
        }}
        {...props}
    />;
};
