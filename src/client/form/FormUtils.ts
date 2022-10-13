import {
	IFormFields,
	IMutationHook
}                        from "@leight-core/api";
import {useMutation}     from "@tanstack/react-query";
import {FormInstance}    from "antd";
import CancelablePromise from "cancelable-promise";

type ICancelableResolveCallback = (resolve: any) => void

export const FormUtils = {
	/**
	 * Extract form fields. Promise is used to ensure all fields are in the form (in case of dynamic forms).
	 *
	 * @param form Antd form instance
	 */
	fields: function (form: FormInstance): CancelablePromise<IFormFields[]> {
		return new CancelablePromise((resolve: ICancelableResolveCallback) => setTimeout(() => {
			resolve(form.getFieldsError().map(item => {
				return [
					item.name,
					form.getFieldInstance(item.name)
				];
			}));
		}, 0));
	},
};

export const usePassThroughMutation: IMutationHook<any, any> = () => useMutation<any, any, any, any>(values => new Promise(resolve => resolve(values)));
