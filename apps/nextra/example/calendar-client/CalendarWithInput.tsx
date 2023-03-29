import {
    Calendar,
    type ICalendarProps
}                 from "@leight/calendar-client";
import {DateTime} from "@leight/i18n";
import {type FC}  from "react";

export interface ICalendarWithInputProps extends ICalendarProps {
}

export const CalendarWithInput: FC<ICalendarWithInputProps> = (props) => {
    return <Calendar
        /**
         * You can pass input here or through the props; input is DateTime from Luxon
         */
        input={DateTime.fromObject({month: 2})}
        {...props}
    />;
};
