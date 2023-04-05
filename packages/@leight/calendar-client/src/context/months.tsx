import {createStoreContext} from "@leight/context-client";
import {
    DateTime,
    type IMonths,
    monthsOf
}                           from "@leight/i18n";
import {type IStoreProps}   from "@leight/zustand";
import {
    type ComponentProps,
    type FC
}                           from "react";

export type IMonthsStoreStoreProps = IStoreProps<{
    /**
     * Set months of the given date
     */
    monthsOf(input: DateTime): void;
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

export const {
                 Provider: MonthsStoreProvider,
                 useState: useMonths,
             } = createStoreContext<IMonthsStoreStoreProps>({
    state: ({state}) => (set) => ({
        monthsOf(input: DateTime) {
            set({
                months: monthsOf({input}),
            });
        },
        today() {
            set({
                months: monthsOf({input: DateTime.now()}),
            });
        },
        prevYear() {
            set(({months: {input}}) => ({
                months: monthsOf({input: input.minus({year: 1})}),
            }));
        },
        nextYear() {
            set(({months: {input}}) => ({
                months: monthsOf({input: input.plus({year: 1})}),
            }));
        },
        ...state,
    }),
    name:  "MonthsContext",
    hint:  "Add CalendarProvider or MonthsProvider.",
});

export interface IMonthsProviderProps extends Omit<ComponentProps<typeof MonthsStoreProvider>, "state"> {
    input?: DateTime;
}

export const MonthsProvider: FC<IMonthsProviderProps> = ({input, ...props}) => {
    return <MonthsStoreProvider
        state={{
            months: monthsOf({input}),
        }}
        {...props}
    />;
};
