import {useOptionalFormItemContext} from "@leight-core/client";
import {Input}                      from "antd";
import {
	ComponentProps,
	FC,
	forwardRef
}                                   from "react";

export interface ITextAreaProps extends Partial<ComponentProps<typeof Input.TextArea>> {
	usePlaceholder?: boolean;
}

export const TextArea: FC<ITextAreaProps> = forwardRef(({usePlaceholder, ...props}, ref) => {
	const formItemContext = useOptionalFormItemContext();
	formItemContext && usePlaceholder && (props.placeholder = formItemContext.label);
	return <Input.TextArea ref={ref as any} {...props}/>;
});
