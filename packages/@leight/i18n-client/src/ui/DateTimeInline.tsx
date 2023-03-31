import {type IDateInput}  from "@leight/i18n";
import {type FC}          from "react";
import {useDateTimeState} from "../context";

export interface IDateTimeInlineProps {
    input?: IDateInput;
    fallback?: IDateInput;
}

export const DateTimeInline: FC<IDateTimeInlineProps> = ({input, fallback}) => {
    const {toLocalDateTime} = useDateTimeState(({toLocalDateTime}) => ({toLocalDateTime}));
    return <>
        {toLocalDateTime(input, fallback)}
    </>;
};
