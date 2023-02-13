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
    defaults?: Partial<TProps>;
}>;

export interface ICreateProviderProps<TStoreProps> {
    name: string;
    createStore: ICreateStore<TStoreProps>;
    Context: IStoreContext<TStoreProps>;
}

export const createProvider = <TStoreProps, >(
    {
        name,
        createStore,
        Context,
    }: ICreateProviderProps<TStoreProps>): IStoreProviderFactory<TStoreProps> => {
    const provider: IStoreProviderFactory<TStoreProps> = function Provider({children, defaults}) {
        const store = createStore(defaults);
        const memo  = useMemo(() => ({state: store.getState(), store}), []);
        return (
            <Context.Provider value={memo}>
                {withConsumer(children, Context)}
            </Context.Provider>
        );
    };
    provider.displayName                               = name;
    return provider;
};
