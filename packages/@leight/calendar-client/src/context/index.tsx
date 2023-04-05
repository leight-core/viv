import {type DateTime}  from "@leight/i18n";
import {
    type FC,
    type PropsWithChildren
}                       from "react";
import {MonthsProvider} from "./months";
import {WeeksProvider}  from "./weeks";
import {YearsProvider}  from "./years";

export type ICalendarProviderProps = PropsWithChildren<{
    date?: DateTime;
}>;

export const CalendarProvider: FC<ICalendarProviderProps> = ({children, date}) => {
    return <YearsProvider
        date={date}
    >
        <MonthsProvider
            date={date}
        >
            <WeeksProvider
                date={date}
            >
                {children}
            </WeeksProvider>
        </MonthsProvider>
    </YearsProvider>;
};

export * from "./months";
export * from "./weeks";
export * from "./years";
