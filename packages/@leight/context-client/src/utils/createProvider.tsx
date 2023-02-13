import {
    type ICreateStore,
    type IStoreApi,
    type IStoreContext,
}                               from "@leight/zustand";
import {
    type FC,
    useMemo
}                               from "react";
import {type IProviderChildren} from "../api";
import {withConsumer}           from "./withConsumer";

export type IStoreProviderFactory<TProps> = FC<{
    children: IProviderChildren<IStoreApi<TProps>>;
}>;

export interface ICreateProviderProps<TStoreProps> {
    createStore: ICreateStore<TStoreProps>;
    defaults?: Partial<TStoreProps>;
    Context: IStoreContext<TStoreProps>;
}

export const createProvider = <TStoreProps, >(
    {
        createStore,
        defaults,
        Context,
    }: ICreateProviderProps<TStoreProps>): IStoreProviderFactory<TStoreProps> => {
    return function StoreProvider({children}) {
        const store = createStore(defaults);
        const memo  = useMemo(() => ({state: store.getState(), store}), []);
        return (
            <Context.Provider value={memo}>
                {withConsumer(children, Context)}
            </Context.Provider>
        );
    };
};
