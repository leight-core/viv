import {type IErrorResponse} from "../schema/ErrorResponseSchema";

export const isError = (test: any): test is IErrorResponse => {
    return test && Object.hasOwn(test, "error");
};
