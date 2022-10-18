import {INamePath} from "@leight/shared";

export interface IFormFieldError {
    readonly id: INamePath;
    readonly error: string;
}
