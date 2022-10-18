import {RequiredKeys} from "@leight/shared";

export type PickRequired<T> = Pick<T, RequiredKeys<T>>;
