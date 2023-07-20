import {type IStoreProps} from "./IStoreProps";

/**
 * Use state of a store with an optional state selector
 */
export interface IUseState$<TStoreProps extends IStoreProps> {
    /**
     * Use store with a selector
     */<U>(selector: (state: TStoreProps["StoreProps"] | null) => U): U;

    /**
     * Use whole store without selector
     */
    (): TStoreProps["StoreProps"] | null;
}
