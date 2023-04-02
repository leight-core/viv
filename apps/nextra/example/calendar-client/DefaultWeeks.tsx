import {
    Weeks,
    WeeksProvider
}                from "@leight/calendar-client";
import {type FC} from "react";

export interface IDefaultWeeksProps {
}

export const DefaultWeeks: FC<IDefaultWeeksProps> = () => {
    /**
     * Here you can use WeeksProvider or CalendarProvider.
     *
     * CalendarProvider provides all stuff needed for the whole Calendar (weeks/months/years/...).
     */
    return <WeeksProvider>
        <Weeks/>
    </WeeksProvider>;
};
