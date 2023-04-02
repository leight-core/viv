import {DateTime}    from "@leight/i18n";
import {DateInline}  from "@leight/i18n-client";
import {Breadcrumbs} from "@mantine/core";
import {
    ComponentProps,
    type FC
}                    from "react";

export interface IDateRageInlineProps extends Omit<ComponentProps<typeof Breadcrumbs>, "children"> {
    start: DateTime;
    end: DateTime;
}

export const DateRageInline: FC<IDateRageInlineProps> = ({start, end, ...props}) => {
    return <Breadcrumbs
        separator={"→"}
        className={"secondary"}
        {...props}
    >
        <DateInline input={start.toJSDate()} options={{day: "numeric", month: "numeric"}}/>
        <DateInline input={end.toJSDate()}/>
    </Breadcrumbs>;
};
