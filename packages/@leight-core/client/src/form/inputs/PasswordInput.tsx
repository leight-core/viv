import {Input}                      from "antd";
import {
	ComponentProps,
	FC,
	forwardRef
}                                   from "react";
import {useOptionalFormItemContext} from "../FormItemContext";

export interface IPasswordInputProps extends Partial<ComponentProps<typeof Input.Password>> {
	usePlaceholder?: boolean;
}

export const PasswordInput: FC<IPasswordInputProps> = forwardRef(({usePlaceholder, ...props}, ref) => {
	const formItemContext = useOptionalFormItemContext();
	return <Input.Password
		ref={ref as any}
		placeholder={formItemContext && usePlaceholder ? formItemContext.label : props.placeholder}
		{...props}
	/>;
});
