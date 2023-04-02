import {
    Years,
    YearsProvider
}                from "@leight/calendar-client";
import {type FC} from "react";

export interface IDefaultYearsProps {
}

export const DefaultYears: FC<IDefaultYearsProps> = () => {
    return <YearsProvider>
        <Years/>
    </YearsProvider>;
};
