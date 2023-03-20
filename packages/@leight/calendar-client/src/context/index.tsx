import {createStoreContext} from "@leight/context-client";
import {
    type ICalendarProps,
    type IUseCalendarOptions,
    useCalendar
}                           from "@tuplo/use-calendar";
import {
    ComponentProps,
    type FC
}                           from "react";

export interface ICalendarStoreStoreProps {
    calendar?: ICalendarProps;
}

export const {
                 Provider:         CalendarStoreProvider,
                 useState:         useCalendarStoreState,
                 useOptionalState: useOptionalCalendarStoreState,
                 useStore:         useCalendarStoreStore,
                 useOptionalStore: useOptionalCalendarStoreStore,
             } = createStoreContext<ICalendarStoreStoreProps>(
    (set) => ({
        /**
         * @TODO defaults with required store props in the target StoreProvider.
         */

        calendar: undefined,
    }),
    "CalendarStoreContext",
    "Add CalendarStoreProvider."
);

export interface ICalendarProviderProps extends Omit<ComponentProps<typeof CalendarStoreProvider>, "defaults"> {
    options?: Partial<IUseCalendarOptions>;
}

export const CalendarProvider: FC<ICalendarProviderProps> = ({options, ...props}) => {
    const calendar = useCalendar(options);
    return <CalendarStoreProvider
        defaults={{
            calendar,
        }}
        {...props}
    />;
};
