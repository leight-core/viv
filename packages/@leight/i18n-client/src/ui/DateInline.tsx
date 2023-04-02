import {
    type DateTimeFormatOptions,
    type IDateInput
}                         from "@leight/i18n";
import {
    type FC,
    HTMLProps
}                         from "react";
import {useDateTimeState} from "../context";

export interface IDateInlineProps extends Omit<HTMLProps<HTMLSpanElement>, "children"> {
    input?: IDateInput;
    fallback?: IDateInput;
    options?: DateTimeFormatOptions;
}

export const DateInline: FC<IDateInlineProps> = ({input, fallback, options, ...props}) => {
    const {toLocalDate} = useDateTimeState(({toLocalDate}) => ({toLocalDate}));
    return <span {...props}>
        {toLocalDate(input, fallback, options)}
    </span>;
};
