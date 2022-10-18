import {INamePath} from "@leight/shared";

/**
 * When setting value to a field, this object describes how to do that.
 */
export interface IFormFieldValue<TValue = any> {
    /**
     * Path of a field.
     */
    name: INamePath;
    /**
     * Value being set.
     */
    value: TValue;
}
