import {type IHrefProps} from "../api/IHrefProps";

export const isHrefProps = (input: any): input is IHrefProps => {
    if (!input) {
        return false;
    } else if (Object.hasOwn(input, "href")) {
        return true;
    }
    return false;
};
