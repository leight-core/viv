import isObject          from "is-object";
import {type IHrefProps} from "../api/IHrefProps";

export const isHrefProps = (input: any): input is IHrefProps => {
    if (!input || !isObject(input)) {
        return false;
    } else if ("href" in input) {
        return true;
    }
    return false;
};
