import {
    IFormErrors,
    IMobileFormContext,
    IProviderChildren,
    MobileFormContext,
    withProviderChildren
}                       from "@leight-core/viv";
import {message}        from "antd";
import {Form}           from "antd-mobile";
import {
    FC,
    useState
}                       from "react";
import {useTranslation} from "react-i18next";

export interface IMobileFormProviderProps {
    translation?: string;
    children?: IProviderChildren<IMobileFormContext>;
}

export const MobileFormProvider: FC<IMobileFormProviderProps> = ({translation, children}) => {
    const {t}                           = useTranslation();
    const [form]                        = Form.useForm();
    const [isSubmitVisible, showSubmit] = useState(true);
    return <MobileFormContext.Provider
        value={{
            translation,
            form,
            isSubmitVisible,
            showSubmit,
            setValues: values => form.setFieldsValue(values),
            setValue:  values => form.setFields(values.map(value => ({name: value.name, value: value.value}))),
            reset:     () => form.resetFields(),
            values:    form.getFieldsValue,
            setErrors: (errors: IFormErrors) => {
                errors.message && message.error(t("error." + errors.message));
                form.setFields(((errors || {}).errors || []).map(item => ({
                    name:   item.id,
                    errors: [t("error." + item.error)],
                })));
            },
        }}
    >
        {withProviderChildren(children, MobileFormContext)}
    </MobileFormContext.Provider>;
};
