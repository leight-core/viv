import {createStoreContext} from "@leight/context-client";
import {
    DateTime,
    type IWeeks,
    weeksOf
}                           from "@leight/i18n";
import {type IStoreProps}   from "@leight/zustand";
import {
    type ComponentProps,
    type FC,
    PropsWithChildren
}                           from "react";

export type IWeeksStoreStoreProps = IStoreProps<{
    /**
     * Set weeks of the given date
     */
    weeksOf(input: DateTime): void;
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

export const {
                 Provider: WeeksStoreProvider,
                 useState: useWeeks,
             } = createStoreContext<IWeeksStoreStoreProps>({
    state: ({state}) => (set) => ({
        weeksOf(input: DateTime) {
            set({
                weeks: weeksOf({input}),
            });
        },
        today() {
            set({
                weeks: weeksOf({input: DateTime.now()}),
            });
        },
        prevMonth() {
            set(({weeks: {input}}) => ({
                weeks: weeksOf({input: input.minus({month: 1})}),
            }));
        },
        nextMonth() {
            set(({weeks: {input}}) => ({
                weeks: weeksOf({input: input.plus({month: 1})}),
            }));
        },
        prevYear() {
            set(({weeks: {input}}) => ({
                weeks: weeksOf({input: input.minus({year: 1})}),
            }));
        },
        nextYear() {
            set(({weeks: {input}}) => ({
                weeks: weeksOf({input: input.plus({year: 1})}),
            }));
        },
        ...state,
    }),
    name:  "WeeksContext",
    hint:  "Add WeeksProvider.",
});

export interface IWeeksProviderProps extends Omit<ComponentProps<typeof WeeksStoreProvider>, "state"> {
    input?: DateTime;
}

export const WeeksProvider: FC<IWeeksProviderProps> = ({input, ...props}) => {
    return <WeeksStoreProvider
        state={{
            weeks: weeksOf({input}),
        }}
        {...props}
    />;
};

export type ICalendarProviderProps = PropsWithChildren<{
    input?: DateTime;
}>;

export const CalendarProvider: FC<ICalendarProviderProps> = ({children, ...props}) => {
    return <WeeksProvider
        {...props}
    >
        {children}
    </WeeksProvider>;
};
