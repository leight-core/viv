import {
	DatePicker as CoolDatePicker,
	DatePickerProps
}                                   from "antd";
import {FC}                         from "react";
import {useOptionalFormItemContext} from "../FormItemContext";

export type IDatePickerProps = {
	format?: string
	usePlaceholder?: boolean
}

export const DatePicker: FC<DatePickerProps & IDatePickerProps> = (
	{
		format = "LL",
		usePlaceholder = false,
		...props
	}) => {
	const formItemContext = useOptionalFormItemContext();
	return <CoolDatePicker
		format={date => date.format(format)}
		size={"large"}
		style={{width: "100%"}}
		placeholder={formItemContext && usePlaceholder ? formItemContext.label : undefined}
		{...props}
	/>;
};
