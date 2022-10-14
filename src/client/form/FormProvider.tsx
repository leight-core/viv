import {
    FormContext,
    FormLoadingProvider,
    FormUtils,
    IFormContext,
    IFormErrors,
    IFormFields,
    IProviderChildren,
    withProviderChildren
}                       from "@leight-core/viv";
import {
    Form as CoolForm,
    message
}                       from "antd";
import React, {
    FC,
    useMemo,
    useState
}                       from "react";
import {useTranslation} from "react-i18next";

export interface IFormProviderProps {
    translation?: string;
    children?: IProviderChildren<IFormContext>;
}

export const FormProvider: FC<IFormProviderProps> = ({translation, children}) => {
    const {t}                 = useTranslation();
    const [errors, setErrors] = useState<IFormErrors>({errors: []});
    const [form]              = CoolForm.useForm();

    const context = useMemo<IFormContext>(() => {
        return {
            translation,
            form,
            errors,
            setErrors:   (errors: IFormErrors) => {
                setErrors(errors);
                errors.message && message.error(t("error." + errors.message));
                form.setFields(((errors || {}).errors || []).map(item => ({
                    name:   item.id,
                    errors: [t("error." + item.error)],
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
                FormUtils.fields(form).then((fields: IFormFields[]) => fields.map(([field]) => form.setFields([{errors: [], name: field}])));
            },
        };
    }, []);

    return <FormLoadingProvider>
        <FormContext.Provider
            value={context}
        >
            {withProviderChildren(children, FormContext)}
        </FormContext.Provider>
    </FormLoadingProvider>;
};
