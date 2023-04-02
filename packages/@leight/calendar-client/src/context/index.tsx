import {type DateTime}  from "@leight/i18n";
import {
    type FC,
    type PropsWithChildren
}                       from "react";
import {MonthsProvider} from "./months";
import {WeeksProvider}  from "./weeks";

export type ICalendarProviderProps = PropsWithChildren<{
    input?: DateTime;
}>;

export const CalendarProvider: FC<ICalendarProviderProps> = ({children, input}) => {
    return <MonthsProvider
        input={input}
    >
        <WeeksProvider
            input={input}
        >
            {children}
        </WeeksProvider>
    </MonthsProvider>;
};

export * from "./months";
export * from "./weeks";
