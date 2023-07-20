import {Pack}                from "@leight/utils";
import {
    useEffect,
    useMemo
}                            from "react";
import {type ICreateStore}   from "../api/ICreateStore";
import {type IStoreContext}  from "../api/IStoreContext";
import {type IStoreProps}    from "../api/IStoreProps";
import {type IStoreProvider} from "../api/IStoreProvider";

export interface IWithStoreProviderProps<TStoreProps extends IStoreProps> {
    name: string;
    createStore: ICreateStore<TStoreProps>;
    Context: IStoreContext<TStoreProps>;
}

export const withStoreProvider = <TStoreProps extends IStoreProps>(
    {
        name,
        createStore,
        Context,
    }: IWithStoreProviderProps<TStoreProps>): IStoreProvider<TStoreProps> => {
    return function StoreProvider(
        {
            children,
            defaults,
            state,
        }) {
        const memo = useMemo(() => {
            const store = createStore({
                defaults,
                state
            });
            return {
                name,
                state: store.getState(),
                store
            };
        }, []);
        useEffect(() => {
            defaults && memo.store.setState(defaults);
        }, [Pack.pack(defaults)]);
        return <Context.Provider value={memo}>
            {children}
        </Context.Provider>;
    };
};
