import {IFormContext} from "@leight/mobile";
import {IFormValues}  from "@leight/shared";

/**
 * When form values are changed, this is a response object with all the data.
 */
export interface IFormChangedResponse<TValues extends IFormValues> {
    readonly values: TValues;
    readonly formContext: IFormContext<TValues>;
}
