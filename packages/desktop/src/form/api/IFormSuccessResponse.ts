import {IFormContext} from "@leight/desktop";
import {
    IFormValues,
    INavigate
}                     from "@leight/shared";

/**
 * When a form is successfully submitted, this is the result object a handler gets.
 */
export interface IFormSuccessResponse<TValues extends IFormValues, TResponse> {
    /**
     * Handy shortcut for navigation.
     */
    readonly navigate: INavigate;
    /**
     * Original values sent to the form.
     */
    readonly values: TValues;
    /**
     * Response values got after processing form.
     */
    readonly response: TResponse;
    /**
     * Access to the whole form context.
     */
    readonly formContext: IFormContext<TValues>;

    /**
     * Translates given string using form's translation base if provided.
     * @param text
     * @param data
     */
    t(text: string, data?: Record<string, any>): string;
}
