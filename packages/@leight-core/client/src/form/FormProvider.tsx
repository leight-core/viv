import {
	IFormErrors,
	IFormFields
}                          from "@leight-core/api";
import {
	Form as CoolForm,
	message
}                          from "antd";
import React, {
	FC,
	PropsWithChildren,
	useState
}                          from "react";
import {useTranslation}    from "../i18n";
import {FormBlockProvider} from "./FormBlockProvider";
import {FormContext}       from "./FormContext";
import {FormUtils}         from "./FormUtils";

export type IFormProviderProps = PropsWithChildren<{
	translation?: string;
}>;

export const FormProvider: FC<IFormProviderProps> = ({translation, ...props}) => {
	const {t}                 = useTranslation();
	const [errors, setErrors] = useState<IFormErrors>({errors: []});
	const [form]              = CoolForm.useForm();
	return <FormBlockProvider>
		<FormContext.Provider
			value={{
				translation,
				form,
				errors,
				setErrors:   (errors: IFormErrors) => {
					setErrors(errors);
					errors.message && message.error(t(`error.${errors.message}`));
					form.setFields(((errors || {}).errors || []).map(item => ({
						name:   item.id,
						errors: [t(`error.${item.error}`)],
					})));
				},
				setValues:   values => form.setFieldsValue(values),
				setValue:    values => form.setFields(values.map(value => ({name: value.name, value: value.value}))),
				reset:       () => {
					setErrors({errors: []});
					form.resetFields();
				},
				values:      form.getFieldsValue,
				resetErrors: () => {
					setErrors({errors: []});
					FormUtils.fields(form).then((fields: IFormFields[]) => fields.map(([field]) => form.setFields([
						{
							errors: [],
							name:   field
						}
					])));
				},
			}}
			{...props}
		/>
	</FormBlockProvider>;
};
