import {IFormFields}  from "@leight/viv";
import {useMutation}  from "@tanstack/react-query";
import {FormInstance} from "antd";

export const FormUtils = {
    /**
     * Extract form fields. Promise is used to ensure all fields are in the form (in case of dynamic forms).
     *
     * @param form Antd form instance
     */
    fields: function (form: FormInstance): Promise<IFormFields[]> {
        return new Promise(resolve => setTimeout(() => {
            resolve(form.getFieldsError().map(item => {
                return [
                    item.name,
                    form.getFieldInstance(item.name)
                ];
            }));
        }, 0));
    },
};

export const usePassThroughMutation = () => useMutation<any, any, any, any>(values => new Promise(resolve => resolve(values)));
