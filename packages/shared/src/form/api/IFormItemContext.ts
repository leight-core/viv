import {INamePath} from "@leight/shared";

export interface IFormItemContext {
    readonly field: INamePath;
    readonly label: string;

    setValue(value: any): void;

    getValue(): any;

    setErrors(errors: string[]): void;
}
