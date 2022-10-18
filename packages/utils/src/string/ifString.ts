import {isString} from "@leight/utils";

export const ifString = <T, U>(val: T, callback: (val: string) => U): U | T => isString(val) ? callback(val as string) : val;
