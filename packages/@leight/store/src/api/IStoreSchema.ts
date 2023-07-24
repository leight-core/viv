import {type MergeIf}         from "@leight/utils";
import {
    type Context,
    type FC,
    type PropsWithChildren
}                             from "react";
import {
    type StateCreator,
    type StoreApi
}                             from "zustand/esm";
import {type IStoreProps}     from "./IStoreProps";
import {type IStorePropsType} from "./IStorePropsType";

/**
 * Store schema contains all the types a Store uses.
 *
 * This interface should be used as a type only.
 */
export interface IStoreSchema<TStoreProps extends IStoreProps> {
    Props: TStoreProps;

    FactoryProps: {
        state: IStoreSchema<TStoreProps>["StateCreator"],
        name: string,
        hint?: string
    };

    Create(props: IStoreSchema<TStoreProps>["StateCreatorProps"]): StoreApi<TStoreProps["StoreProps"]>;

    StateCreator(props: IStoreSchema<TStoreProps>["StateCreatorProps"]): StateCreator<TStoreProps["StoreProps"]>;

    StateCreatorProps: MergeIf<
        {
            defaults?: Partial<TStoreProps["Props$"]>;
        },
        TStoreProps["State"],
        IStorePropsType,
        {
            state: TStoreProps["State"];
        },
        {
            state?: never;
        }
    >;

    Store: {
        name: string;
        Provider: IStoreSchema<TStoreProps>["Provider"];
        use: IStoreSchema<TStoreProps>["UseState"];
        use$: IStoreSchema<TStoreProps>["UseState$"];
        useStore: () => StoreApi<TStoreProps["StoreProps"]>;
        useStore$: () => StoreApi<TStoreProps["StoreProps"]> | null;
    };

    StoreContext: {
        name: string;
        state: TStoreProps["StoreProps"];
        store: StoreApi<TStoreProps["StoreProps"]>;
    };

    Context: Context<IStoreSchema<TStoreProps>["StoreContext"] | null>;
    Provider: FC<IStoreSchema<TStoreProps>["ProviderProps"]>;
    ProviderProps: PropsWithChildren<IStoreSchema<TStoreProps>["StateCreatorProps"]>;

    UseState$: {
        /**
         * Use store with a selector
         */<U>(selector: (state: TStoreProps["StoreProps"] | null) => U): U;

        /**
         * Use whole store without selector
         */
        (): TStoreProps["StoreProps"] | null;
    };

    UseState: {
        <U>(selector: (state: TStoreProps["StoreProps"]) => U): U;

        (): TStoreProps["StoreProps"];
    };
}

export namespace IStoreSchema {
    export type Of<TStoreProps extends IStoreProps> = IStoreSchema<TStoreProps>;
}
