import {
    FormLoadingProvider,
    IFormErrors,
    IMobileFormContext,
    isCallable,
    MobileFormContext
}                       from "@leight-core/viv";
import {message}        from "antd";
import {Form}           from "antd-mobile";
import {
    FC,
    ReactNode,
    useState
}                       from "react";
import {useTranslation} from "react-i18next";

export interface IMobileFormProviderProps {
    translation?: string;
    children?: ReactNode | ((formContext: IMobileFormContext) => ReactNode);
}

export const MobileFormProvider: FC<IMobileFormProviderProps> = ({translation, children}) => {
    const {t}                           = useTranslation();
    const [form]                        = Form.useForm();
    const [isSubmitVisible, showSubmit] = useState(true);
    return <FormLoadingProvider>
        <MobileFormContext.Provider
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
            {isCallable(children) ? <MobileFormContext.Consumer>{children as any}</MobileFormContext.Consumer> : children as ReactNode}
        </MobileFormContext.Provider>
    </FormLoadingProvider>;
};
