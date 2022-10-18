import {
    IFormError,
    IFormErrors,
    INamePath,
    INavigate,
    Unboxed
}             from "@leight/viv";
import {Form} from "antd-mobile";

export interface IMobileFormItemContext {
    readonly field: INamePath;
    readonly label: string;

    setValue(value: any): void;

    getValue(): any;

    setErrors(errors: string[]): void;
}

export interface IMobileFormSuccess<TFormValues, TResponse> {
    /**
     * Handy shortcut for navigation.
     */
    readonly navigate: INavigate;
    /**
     * Original values sent to the form.
     */
    readonly values: TFormValues;
    /**
     * Response values got after processing form.
     */
    readonly response: TResponse;
    /**
     * Access to the whole form context.
     */
    readonly formContext: IMobileFormContext<TFormValues>;

    /**
     * Translates given string using form's translation base if provided.
     * @param text
     * @param data
     */
    t(text: string, data?: Record<string, any>): string;
}

export interface IMobileFormContext<TValues = any> {
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

    setValue(value: { name: INamePath, value: any }[]): void;

    /**
     * Set field errors.
     *
     * @param errors
     */
    setErrors(errors: IFormErrors): void;

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

export interface IMobileFormValuesChanged<TFormValues> {
    readonly values: TFormValues;
    readonly formContext: IMobileFormContext<TFormValues>;
    readonly changed: Partial<TFormValues>;
}

export interface IMobileFormChanged<TFormValues> {
    readonly values: TFormValues;
    readonly formContext: IMobileFormContext<TFormValues>;
}

export interface IMobileFormFailure<TFormValues> {
    readonly error: string;
    readonly formContext: IMobileFormContext<TFormValues>;
}

export interface IToMobileFormError<TError, TFormValues> {
    readonly error: TError;
    readonly formContext: IMobileFormContext<TFormValues>;
}

export interface IMobileErrorHandler<TError, TFormValues> {
    readonly error: TError;
    readonly formContext: IMobileFormContext<TFormValues>;
}

export type IMobileFormErrorHandler<TError, TFormValues> = (error: IMobileErrorHandler<TError, TFormValues>) => void;
export type IMobileFormErrorMap<TFormValues> = Record<string, IFormError | IMobileFormErrorHandler<any, TFormValues>>
