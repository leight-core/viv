import {default as isCoolCallable} from "is-callable";

export const isCallable = (val: any): boolean => isCoolCallable(val);
