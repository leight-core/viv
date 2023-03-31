import {
    Calendar,
    CalendarProvider,
    type ICalendarProps,
    useCalendar
}                 from "@leight/calendar-client";
import {DateTime} from "@leight/i18n";
import {type FC}  from "react";

export interface ICalendarWithInputProps extends ICalendarProps {
}

export const CalendarWithInput: FC<ICalendarWithInputProps> = (props) => {
    /**
     * Calendar is powered by it's Calendar Store where state control and state itself lives.
     */
    return <CalendarProvider
        /**
         * You can pass input here or through the props; input is DateTime from Luxon
         */
        input={DateTime.fromObject({month: 2})}
    >
        <CalendarInternal {...props}/>
    </CalendarProvider>;
};

interface ICalendarInternalProps extends ICalendarWithInputProps {
}

const CalendarInternal: FC<ICalendarInternalProps> = (props) => {
    const {today} = useCalendar(({today}) => ({today}));
    return <>
        <button onClick={() => today()}>Today</button>
        <Calendar
            {...props}
        />
    </>;
};
