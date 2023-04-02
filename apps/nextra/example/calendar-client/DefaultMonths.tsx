import {
    Months,
    MonthsProvider
}                from "@leight/calendar-client";
import {type FC} from "react";

export interface IDefaultMonthsProps {
}

export const DefaultMonths: FC<IDefaultMonthsProps> = () => {
    return <MonthsProvider>
        <Months/>
    </MonthsProvider>;
};
