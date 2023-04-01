import {
    type DateTimeFormatOptions,
    type IDateInput
}                         from "@leight/i18n";
import {type FC}          from "react";
import {useDateTimeState} from "../context";

export interface IDateTimeInlineProps {
    input?: IDateInput;
    fallback?: IDateInput;
    options?: DateTimeFormatOptions;
}

export const DateTimeInline: FC<IDateTimeInlineProps> = ({input, fallback, options}) => {
    const {toLocalDateTime} = useDateTimeState(({toLocalDateTime}) => ({toLocalDateTime}));
    return <>
        {toLocalDateTime(input, fallback, options)}
    </>;
};
