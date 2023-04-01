import {
    Calendar,
    CalendarProvider,
    type ICalendarProps,
    useCalendar
}                 from "@leight/calendar-client";
import {DateTime} from "@leight/i18n";
import {
    type FC,
    useEffect
}                 from "react";

export interface IAdvancedCalendarProps extends ICalendarProps {
}

export const AdvancedCalendar: FC<IAdvancedCalendarProps> = (props) => {
    /**
     * Calendar is powered by its Calendar Store where state control and state itself lives.
     */
    return <CalendarProvider
        /**
         * You can pass input here or through the props; input is DateTime from Luxon
         */
        input={DateTime.fromObject({month: 2, day: 12})}
        defaults={{
            /**
             * Set default loading state to emulate fetching calendar data
             */
            isLoading: true,
        }}
    >
        <CalendarInternal {...props}/>
    </CalendarProvider>;
};

interface ICalendarInternalProps extends IAdvancedCalendarProps {
}

const CalendarInternal: FC<ICalendarInternalProps> = (props) => {
    /**
     * Control Calendar's loading state
     */
    const {loading} = useCalendar(({loading}) => ({loading}));
    useEffect(() => {
        setTimeout(() => {
            /**
             * Ou, "we have" data! Turn off loading
             */
            loading(false);
        }, 1000);
    }, []);
    return <Calendar
        {...props}
    />;
};
