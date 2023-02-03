import {Input} from "antd";
import {ComponentProps, FC, forwardRef} from "react";
import {useOptionalFormItemContext} from "../FormItemContext";

export interface ITextAreaProps extends Partial<ComponentProps<typeof Input.TextArea>> {
	usePlaceholder?: boolean;
}

export const TextArea: FC<ITextAreaProps> = forwardRef(({usePlaceholder, ...props}, ref) => {
	const formItemContext = useOptionalFormItemContext();
	return <Input.TextArea
		ref={ref as any}
		placeholder={formItemContext && usePlaceholder ? formItemContext.label : props.placeholder}
		{...props}
	/>;
});
