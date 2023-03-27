import {type FC}          from "react";
import {useDateTimeState} from "../context";

export interface IDateProps {
    input?: string;
    fallback?: string;
}

export const Date: FC<IDateProps> = ({input, fallback}) => {
    const {toLocalDate} = useDateTimeState(({toLocalDate}) => ({toLocalDate}));
    return <>
        {toLocalDate(input, fallback)}
    </>;
};
