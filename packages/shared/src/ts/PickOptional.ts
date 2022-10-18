import {OptionalKeys} from "@leight/shared";

export type PickOptional<T> = Pick<T, OptionalKeys<T>>;
