import {IFormContext} from "@leight/desktop";
import {IFormValues}  from "@leight/shared";

/**
 * When something bad happens in the form, this is a response for that event.
 */
export interface IFormFailureResponse<TValues extends IFormValues> {
    readonly error: string;
    readonly formContext: IFormContext<TValues>;
}
