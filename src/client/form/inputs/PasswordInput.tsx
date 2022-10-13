import {useOptionalFormItemContext} from "@leight-core/client";
import {Input}                      from "antd";
import {
	ComponentProps,
	FC,
	forwardRef
}                                   from "react";

export interface IPasswordInputProps extends Partial<ComponentProps<typeof Input.Password>> {
	usePlaceholder?: boolean;
}

export const PasswordInput: FC<IPasswordInputProps> = forwardRef(({usePlaceholder, ...props}, ref) => {
	const formItemContext = useOptionalFormItemContext();
	formItemContext && usePlaceholder && (props.placeholder = formItemContext.label);
	return <Input.Password ref={ref as any} {...props}/>;
});
