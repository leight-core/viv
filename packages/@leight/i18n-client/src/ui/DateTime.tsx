import {type IDateInput}  from "@leight/i18n";
import {type FC}          from "react";
import {useDateTimeState} from "../context";

export interface IDateTimeProps {
    input?: IDateInput;
    fallback?: IDateInput;
}

export const DateTime: FC<IDateTimeProps> = ({input, fallback}) => {
    const {toLocalDateTime} = useDateTimeState(({toLocalDateTime}) => ({toLocalDateTime}));
    return <>
        {toLocalDateTime(input, fallback)}
    </>;
};
