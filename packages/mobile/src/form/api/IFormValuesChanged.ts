import {IFormContext} from "@leight/mobile";
import {IFormValues}  from "@leight/shared";

/**
 * When something changes in the form, this is a "response" object with all
 * interesting data.
 */
export interface IFormValuesChangedResponse<TValues extends IFormValues> {
    readonly values: TValues;
    readonly formContext: IFormContext<TValues>;
    readonly changed: Partial<TValues>;
}
