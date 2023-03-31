import {createStoreContext} from "@leight/context-client";
import {
    calendarOf,
    DateTime,
    type DurationLike,
    type ICalendar
}                           from "@leight/i18n";
import {type IStoreProps}   from "@leight/zustand";
import {
    type ComponentProps,
    type FC
}                           from "react";

export type ICalendarStoreStoreProps = IStoreProps<{
    setInput(input: DateTime): void;
    plus(duration: DurationLike): void;
    minus(duration: DurationLike): void;
    today(): void;
    prevMonth(): void;
    nextMonth(): void;
}, {
    /**
     * Calendar is computed based on an input, so it cannot be required
     * in the time of store creation.
     */
    readonly calendar: ICalendar;
}>

export const {
                 Provider: CalendarStoreProvider,
                 useState: useCalendar,
             } = createStoreContext<ICalendarStoreStoreProps>({
    state: ({state}) => (set) => ({
        setInput(input: DateTime) {
            set({
                calendar: calendarOf({input}),
            });
        },
        plus(duration) {
            set(({calendar: {input}}) => ({
                calendar: calendarOf({input: input.plus(duration)}),
            }));
        },
        minus(duration) {
            set(({calendar: {input}}) => ({
                calendar: calendarOf({input: input.minus(duration)}),
            }));
        },
        today() {
            set({
                calendar: calendarOf({input: DateTime.now()}),
            });
        },
        prevMonth() {
            this.minus({month: 1});
        },
        nextMonth() {
            this.plus({month: 1});
        },
        ...state,
    }),
    name:  "CalendarStoreContext",
    hint:  "Add CalendarStoreProvider.",
});

export interface ICalendarProviderProps extends Omit<ComponentProps<typeof CalendarStoreProvider>, "state"> {
    input?: DateTime;
}

export const CalendarProvider: FC<ICalendarProviderProps> = ({input, ...props}) => {
    return <CalendarStoreProvider
        state={{
            calendar: calendarOf({input}),
        }}
        {...props}
    />;
};
