import {type FC}          from "react";
import {useDateTimeState} from "../context";

export interface IDateTimeProps {
    input?: string;
    fallback?: string;
}

export const DateTime: FC<IDateTimeProps> = ({input, fallback}) => {
    const {toLocalDateTime} = useDateTimeState(({toLocalDateTime}) => ({toLocalDateTime}));
    return <>
        {toLocalDateTime(input, fallback)}
    </>;
};
