import {type FormInstance} from "antd";
import {type NamePath} from "rc-field-form/lib/interface";
import {type INavigate} from "../router";

export type INamePath = NamePath;

export interface IFormItemContext {
	readonly field: INamePath;
	readonly label: string;

	setValue(value: any): void;

	getValue(): any;

	setErrors(errors: string[]): void;
}

export type IFormFields = [INamePath, any];

export interface IFormError {
	readonly id: INamePath;
	readonly error: string;
}

export interface IErrorHandler<TError, TFormValues> {
	readonly error: TError;
	readonly formContext: IFormContext<TFormValues>;
}

export type IFormErrorHandler<TError, TFormValues> = (error: IErrorHandler<TError, TFormValues>) => void;
export type IFormErrorMap<TFormValues> = Record<string, IFormError | IFormErrorHandler<any, TFormValues>>;

export interface IFormErrors {
	readonly message?: string;
	readonly errors: IFormError[];
}

export interface IFormContext<TValues = any> {
	readonly translation?: string;
	/**
	 * Antd form instance.
	 */
	readonly form: FormInstance<TValues>;
	/**
	 * Current form errors.
	 */
	readonly errors: IFormErrors;

	/**
	 * Set field errors.
	 *
	 * @param errors
	 */
	setErrors(errors: IFormErrors): void;

	/**
	 * Set form values
	 *
	 * @param values values being set
	 */
	setValues(values: TValues): void;

	setValue(value: { name: INamePath, value: any }[]): void;

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

export type IToOptionMapper<TItem> = (item: TItem) => IBaseSelectOption;

export interface IFormValuesChanged<TFormValues> {
	readonly values: TFormValues;
	readonly formContext: IFormContext<TFormValues>;
	readonly changed: Partial<TFormValues>;
}

export interface IFormChanged<TFormValues> {
	readonly values: TFormValues;
	readonly formContext: IFormContext<TFormValues>;
}

export interface IFormSuccess<TFormValues, TResponse> {
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
	readonly formContext: IFormContext<TFormValues>;

	/**
	 * Translates given string using form's translation base if provided.
	 * @param text
	 * @param data
	 */
	t(text: string, data?: Record<string, any>): string;
}

export interface IFormFailure<TFormValues> {
	readonly error: string;
	readonly formContext: IFormContext<TFormValues>;
}

export interface IToFormError<TError, TFormValues> {
	readonly error: TError;
	readonly formContext: IFormContext<TFormValues>;
}

export type IBaseSelectItem = any;

export interface IBaseSelectOption {
	readonly value: IBaseSelectItem;
	readonly label: IBaseSelectItem;
}
