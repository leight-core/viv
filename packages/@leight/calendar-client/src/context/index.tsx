import {type DateTime}    from "@leight/i18n";
import {
    type FC,
    type PropsWithChildren
}                         from "react";
import {MonthsOfProvider} from "./months";
import {WeeksOfProvider}  from "./weeks";
import {YearsOfProvider}  from "./years";

export type ICalendarProviderProps = PropsWithChildren<{
    date?: DateTime;
}>;

export const CalendarProvider: FC<ICalendarProviderProps> = ({children, date}) => {
    return <YearsOfProvider
        date={date}
    >
        <MonthsOfProvider
            date={date}
        >
            <WeeksOfProvider
                date={date}
            >
                {children}
            </WeeksOfProvider>
        </MonthsOfProvider>
    </YearsOfProvider>;
};

export * from "./months";
export * from "./weeks";
export * from "./years";
