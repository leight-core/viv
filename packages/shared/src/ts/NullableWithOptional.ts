import {
    Nullable,
    PickOptional,
    PickRequired
} from "@leight/shared";

export type NullableWithOptional<T> =
    PickRequired<T>
    & Nullable<PickOptional<T>>;
