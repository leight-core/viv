export type RequiredKeys<T> = { [K in keyof T]-?: Record<string, unknown> extends { [P in K]: T[K] } ? never : K }[keyof T];

export type OptionalKeys<T> = { [K in keyof T]-?: Record<string, unknown> extends { [P in K]: T[K] } ? K : never }[keyof T];

export type PickRequired<T> = Pick<T, RequiredKeys<T>>;

export type PickOptional<T> = Pick<T, OptionalKeys<T>>;

export type Nullable<T> = { [P in keyof T]: T[P] | null };
export type Undefinable<T> = { [P in keyof T]: T[P] | undefined };

export type NullableWithOptional<T> =
    PickRequired<T>
    & Nullable<PickOptional<T>>;
export type UndefinableWithOptional<T> =
    PickRequired<T>
    & Undefinable<PickOptional<T>>;

export type NullableOptional<T> = Partial<NullableWithOptional<T>>;
export type UndefinableOptional<T> = Partial<UndefinableWithOptional<T>>;

export type IfExtends<TType, TExtends = void> = TExtends extends void ? TType : TType & TExtends;
export type IfVoid<TType, TDefault = void> = TType extends void ? TDefault : TType;
export type CheckVoid<TCheck, TType, TElse = void> = TCheck extends void ? TElse : TType;
export type CheckAny<TCheck, TType, TElse = any> = TCheck extends any ? TElse : TType;
export type CheckIfExtends<TCheck, TExtends, TYes, TNo> = TCheck extends TExtends ? TYes : TNo;

export type Unboxed<T> = T extends (infer U)[] ? U : T;

export type OmitIndex<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K]
}

export namespace KeysOf {
    export type Paths<TObject extends object> = {
        [TKey in keyof TObject & (string | number)]:
        TObject[TKey] extends any[] ?
            `${TKey}` :
            TObject[TKey] extends object
                ? `${TKey}` | `${TKey}.${Paths<TObject[TKey]>}`
                : `${TKey}`;
    }[keyof TObject & (string | number)];

    type ILeavesOf = Record<string, any>;
    type LiteralType =
        string
        | number
        | boolean
        | bigint;
    type GetDirtyDTOKeys<O extends ILeavesOf> = {
        [K in keyof O]-?: NonNullable<O[K]> extends Array<any>
            ? K : NonNullable<O[K]> extends LiteralType
                ? K
                : K extends string
                    ? GetDirtyDTOKeys<NonNullable<O[K]>> extends infer NK
                        ? NK extends string
                            ? `${K}.${NK}`
                            : never
                        : never
                    : never
    }[keyof O];
    type AllDTOKeys =
        string
        | number
        | symbol;
    type TrashDTOKeys =
        `${string}.undefined`
        | number
        | symbol;
    type ExcludeTrashDTOKeys<O extends AllDTOKeys> = O extends TrashDTOKeys ? never : O;
    export type Leaves<TLeavesOf extends ILeavesOf> = ExcludeTrashDTOKeys<GetDirtyDTOKeys<TLeavesOf>>;
}
