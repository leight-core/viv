import {IFormItemContext, INamePath} from "@leight-core/api";
import {Form, FormItemProps, Input} from "antd";
import {Rule} from "rc-field-form/lib/interface";
import {FC, ReactNode} from "react";
import {useTranslation} from "../i18n";
import {useFormContext} from "./FormContext";
import {useOptionalItemGroupContext} from "./group";
import {ShowToken} from "../user/ShowToken";
import {FormItemContext} from "./FormItemContext";

export interface IFormItemProps extends Partial<FormItemProps> {
	/**
	 * Field name; also used for translations.
	 */
	field: INamePath;
	/**
	 * Attach required validation rule?
	 */
	required?: boolean;
	/**
	 * Show Antd Form.Item label.
	 */
	showLabel?: boolean;
	/**
	 * Disable default Antd Form.Item margin.
	 */
	noMargin?: boolean;
	labels?: string[] | string;
	hasTooltip?: boolean;
	withHelp?: boolean;
	showWith?: string[];

	onNormalize?(value: any, formItemContext: IFormItemContext): void,
}

export const FormItem: FC<IFormItemProps> = (
	{
		field,
		required = false,
		showLabel = true,
		noMargin = false,
		children = <Input/>,
		labels = [],
		hasTooltip = false,
		withHelp = false,
		showWith,
		onNormalize,
		...props
	}) => {
	const {t} = useTranslation();
	const formContext = useFormContext();
	const itemGroupContext = useOptionalItemGroupContext();
	const $field = ([] as (string | number)[]).concat(itemGroupContext?.prefix || [], Array.isArray(field) ? field : [field]);
	const fieldName = Array.isArray($field) ? $field.join(".") : $field;
	const rules: Rule[] = [];
	const $labels = Array.isArray(labels) ? labels : [labels];
	formContext.translation && $labels.push(`${formContext.translation}.${fieldName}.label`);
	itemGroupContext?.translation && $labels.push(`${itemGroupContext.translation}.${fieldName}.label`);
	required && rules.push({
		required: true,
		message: t([`form-item.${fieldName}.required`].concat($labels.map(item => `${item}.required`))) as string,
	});
	/**
	 * This is... a hack I really don't understand!
	 * But it works.
	 *
	 * The idea is to clear errors set from form context, and this solution could do that with ease!
	 */
	let help = '';
	let tooltip: ReactNode = '';
	rules.push(() => ({validator: () => Promise.resolve()}));
	tooltip = props.tooltip ? t(`${props.tooltip}`) : props.tooltip;
	formContext.translation && hasTooltip && (tooltip = t(`${formContext.translation}.${fieldName}.label.tooltip`));
	itemGroupContext?.translation && hasTooltip && (tooltip = t(`${itemGroupContext.translation}.${fieldName}.label.tooltip`));
	formContext.translation && withHelp && (help = t(`${formContext.translation}.${fieldName}.label.help`));
	itemGroupContext?.translation && withHelp && (help = t(`${itemGroupContext.translation}.${fieldName}.label.help`));
	const context: IFormItemContext = {
		field: $field,
		label: t([`form-item.${fieldName}.label`].concat($labels)),
		getValue: () => formContext.form.getFieldValue($field),
		setValue: value => formContext.form.setFields([{name: $field, value}]),
		setErrors: (errors: string[]) => {
			setTimeout(() => {
				formContext.form.setFields([{name: $field, errors: errors.map(item => t(item))}]);
			}, 0);
		},
	};
	return <ShowToken tokens={showWith}>
		<FormItemContext.Provider value={context}>
			<Form.Item
				name={$field}
				label={!showLabel ? null : t([`form-item.${fieldName}.label`].concat($labels))}
				rules={rules}
				normalize={onNormalize ? props.normalize || (value => onNormalize(value, context)) : props.normalize}
				help={help}
				tooltip={tooltip}
				style={noMargin ? {margin: 0} : undefined}
				{...props}
			>
				{children}
			</Form.Item>
		</FormItemContext.Provider>
	</ShowToken>;
};
