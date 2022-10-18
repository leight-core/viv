import {
    IFormFieldValue,
    IFormValues,
    Unboxed
}             from "@leight/shared";
import {Form} from "antd-mobile";

export interface IFormContext<TValues extends IFormValues> {
    readonly translation?: string;
    readonly isSubmitVisible: boolean;

    /**
     * Antd form instance.
     */
    readonly form: Unboxed<ReturnType<typeof Form["useForm"]>>;

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
     * Just a flag for form to show/hide submit button. Useful for example in tabbed forms where submit may not be visible all the times).
     *
     * @param show
     */
    showSubmit(show: boolean): void;
}
