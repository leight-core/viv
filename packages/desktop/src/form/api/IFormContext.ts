import {
    IFormFieldValue,
    IFormValues
}                     from "@leight/shared";
import {FormInstance} from "antd";

export interface IFormContext<TValues extends IFormValues = any> {
    readonly translation?: string;
    /**
     * Antd form instance.
     */
    readonly form: FormInstance<TValues>;

    /**
     * Set form values
     *
     * @param values values being set
     */
    setValues(values: TValues): void;

    setValue(value: IFormFieldValue[]): void;

    /**
     * Reset form to the initial state.
     */
    reset(): void;

    /**
     * Return current form values.
     */
    values(): any;

    /**
     * Throw away all error messages of all fields.
     */
    resetErrors(): void;
}
