import {
    type IMonths,
    monthsOf
}                           from "@leight/calendar";
import {createStoreContext} from "@leight/context-client";
import {DateTime}           from "@leight/i18n";
import {type IStoreProps}   from "@leight/zustand";
import {
    type ComponentProps,
    type FC
}                           from "react";

export type IMonthsStoreStoreProps = IStoreProps<{
    /**
     * Set months of the given date
     */
    monthsOf(date: DateTime): void;
    /**
     * Move to the current month
     */
    today(): void;
    prevYear(): void;
    nextYear(): void;
}, {
    /**
     * Calendar is computed based on an input, so it cannot be required
     * in the time of store creation.
     */
    readonly months: IMonths;
}>

export const MonthsOfStore = createStoreContext<IMonthsStoreStoreProps>({
    state: ({state}) => (set) => ({
        monthsOf(date: DateTime) {
            set({
                months: monthsOf({date}),
            });
        },
        today() {
            set({
                months: monthsOf({date: DateTime.now()}),
            });
        },
        prevYear() {
            set(({months: {date}}) => ({
                months: monthsOf({date: date.minus({year: 1})}),
            }));
        },
        nextYear() {
            set(({months: {date}}) => ({
                months: monthsOf({date: date.plus({year: 1})}),
            }));
        },
        ...state,
    }),
    name:  "MonthsContext",
    hint:  "Add CalendarProvider or MonthsProvider.",
});

export interface IMonthsProviderProps extends Omit<ComponentProps<typeof MonthsOfStore["Provider"]>, "state"> {
    date?: DateTime;
}

export const MonthsProvider: FC<IMonthsProviderProps> = ({date, ...props}) => {
    return <MonthsOfStore.Provider
        state={{
            months: monthsOf({date}),
        }}
        {...props}
    />;
};
