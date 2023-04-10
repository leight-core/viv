import {type DateTime} from "luxon";
import {isObject}      from "../utils";

export * from "./api";

export const isDateTime = (input: any): input is DateTime => {
    return isObject(input) && ("toJSDate" in input);
};

export * from "luxon";
