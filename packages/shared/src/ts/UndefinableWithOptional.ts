import {
    PickOptional,
    PickRequired,
    Undefinable
} from "@leight/shared";

export type UndefinableWithOptional<T> =
    PickRequired<T>
    & Undefinable<PickOptional<T>>;
