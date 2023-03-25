import {
    createStoreContext,
    type IStoreProps
} from "@leight/context-client";
import {
    type ICalendarProps,
    type IUseCalendarOptions,
    useCalendar
} from "@tuplo/use-calendar";
import {
    type ComponentProps,
    type FC
} from "react";

export type ICalendarStoreStoreProps = IStoreProps<{
    foo: string;
}, {
    calendar: ICalendarProps;
}>

export const {
                 Provider:         CalendarStoreProvider,
                 useState:         useCalendarStoreState,
                 useOptionalState: useOptionalCalendarStoreState,
                 useStore:         useCalendarStoreStore,
                 useOptionalStore: useOptionalCalendarStoreStore,
             } = createStoreContext<ICalendarStoreStoreProps>({
    state: ({state}) => () => ({
        foo: "yep",
        ...state,
    }),
    name:  "CalendarStoreContext",
    hint:  "Add CalendarStoreProvider.",
});

export interface ICalendarProviderProps extends Omit<ComponentProps<typeof CalendarStoreProvider>, "state"> {
    options?: Partial<IUseCalendarOptions>;
}

export const CalendarProvider: FC<ICalendarProviderProps> = ({options, ...props}) => {
    const calendar = useCalendar(options);
    return <CalendarStoreProvider
        state={{
            calendar,
        }}
        {...props}
    />;
};
