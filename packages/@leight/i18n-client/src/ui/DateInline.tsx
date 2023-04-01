import {
    type DateTimeFormatOptions,
    type IDateInput
}                         from "@leight/i18n";
import {type FC}          from "react";
import {useDateTimeState} from "../context";

export interface IDateInlineProps {
    input?: IDateInput;
    fallback?: IDateInput;
    options?: DateTimeFormatOptions;
}

export const DateInline: FC<IDateInlineProps> = ({input, fallback, options}) => {
    const {toLocalDate} = useDateTimeState(({toLocalDate}) => ({toLocalDate}));
    return <>
        {toLocalDate(input, fallback, options)}
    </>;
};
