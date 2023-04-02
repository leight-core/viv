import {
    Calendar,
    CalendarProvider,
    type ICalendarProps
}                   from "@leight/calendar-client";
import {
    DateTime,
    type IDay
}                   from "@leight/i18n";
import {DateInline} from "@leight/i18n-client";
import {
    type FC,
    useState
}                   from "react";

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
    const [day, setDay] = useState<IDay>();
    return <>
        <Calendar
            onClick={({day}) => setDay(day)}
            {...props}
        />
        <div>selected date: {day ? <DateInline input={day.day.toJSDate()}/> : "- click the calendar -"}</div>
    </>;
};
