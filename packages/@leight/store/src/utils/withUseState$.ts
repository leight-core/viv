import {useContext$}      from "@leight/context";
import {type Context}     from "react";
import {useStore}         from "zustand";
import {type IStoreApi}   from "../api/IStoreApi";
import {type IStoreProps} from "../api/IStoreProps";
import {type IUseState$}  from "../api/IUseState$";

export const withUseState$ = <TStoreProps extends IStoreProps>(
    Context: Context<IStoreApi<TStoreProps> | null>
): IUseState$<TStoreProps> => {
    return <T>(selector?: (state: TStoreProps["StoreProps"] | null) => T | null) => {
        const {store} = useContext$(Context) || {};
        if (store) {
            return selector ? useStore(store, selector) : useStore(store);
        }
        return null;
    };
};
