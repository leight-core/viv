import {IFormFieldError} from "@leight/shared";

/**
 * General response for the form containing errors (if any).
 */
export interface IFormError {
    /**
     * Top level message which is safe to show to user.
     */
    readonly message?: string;
    /**
     * Errors on the individual fields (if any).
     */
    readonly errors?: IFormFieldError[];
}
