import {
    Calendar,
    CalendarProvider,
    type ICalendarProps
}                 from "@leight/calendar-client";
import {DateTime} from "@leight/i18n";
import {type FC}  from "react";

export interface IAdvancedCalendarProps extends ICalendarProps {
}

export const AdvancedCalendar: FC<IAdvancedCalendarProps> = (props) => {
    return <CalendarProvider
        /**
         * You can pass input here or through the props; input is DateTime from Luxon
         */
        input={DateTime.fromObject({month: 2, day: 12})}
    >
        <CalendarInternal {...props}/>
    </CalendarProvider>;
};

interface ICalendarInternalProps extends IAdvancedCalendarProps {
}

const CalendarInternal: FC<ICalendarInternalProps> = (props) => {
    return <Calendar
        {...props}
    />;
};
