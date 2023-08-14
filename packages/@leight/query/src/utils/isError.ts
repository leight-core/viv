import {isObject}            from "@leight/utils";
import {type IErrorResponse} from "../schema/ErrorResponseSchema";

export const isError = (input: any): input is IErrorResponse => {
    if (!isObject(input)) {
        return false;
    } else if ("error" in input) {
        return true;
    }
    return false;
};
