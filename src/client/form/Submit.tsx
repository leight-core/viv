import {
	useFormContext,
	UseToken
}                       from "@leight-core/client";
import {
	Button,
	Form
}                       from "antd";
import React, {
	ComponentProps,
	FC
}                       from "react";
import {useTranslation} from "react-i18next";

export interface ISubmitProps extends Partial<ComponentProps<typeof Button>> {
	/**
	 * Disable Form.Item styling.
	 */
	noStyle?: boolean;
	/**
	 * Title on the button; goes through react-i18next.
	 */
	label: string | string[];
	tokens?: ComponentProps<typeof UseToken>["tokens"];
}

export const Submit: FC<ISubmitProps> = ({noStyle, label, tokens, ...props}) => {
	const {t}         = useTranslation();
	const formContext = useFormContext();
	return <UseToken tokens={tokens}>
		<Form.Item
			shouldUpdate
			noStyle={noStyle}
		>
			<Button
				htmlType={"submit"}
				type={"primary"}
				{...props}
			>
				{t(formContext.translation ? formContext.translation + "." + label : label)}
			</Button>
		</Form.Item>
	</UseToken>;
};
