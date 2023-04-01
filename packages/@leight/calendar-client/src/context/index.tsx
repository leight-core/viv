import {createStoreContext} from "@leight/context-client";
import {
    DateTime,
    type DurationLike,
    type IWeeks,
    weeksOf
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
    readonly isLoading: boolean;
    loading(isLoading: boolean): void;
}, {
    /**
     * Calendar is computed based on an input, so it cannot be required
     * in the time of store creation.
     */
    readonly weeks: IWeeks;
}>

export const {
                 Provider: CalendarStoreProvider,
                 useState: useCalendar,
             } = createStoreContext<ICalendarStoreStoreProps>({
    state: ({state}) => (set) => ({
        isLoading: false,
        loading(isLoading) {
            set({isLoading});
        },
        setInput(input: DateTime) {
            set({
                weeks: weeksOf({input}),
            });
        },
        plus(duration) {
            set(({weeks: {input}}) => ({
                weeks: weeksOf({input: input.plus(duration)}),
            }));
        },
        minus(duration) {
            set(({weeks: {input}}) => ({
                weeks: weeksOf({input: input.minus(duration)}),
            }));
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
            weeks: weeksOf({input}),
        }}
        {...props}
    />;
};
