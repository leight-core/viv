import {
    type IStoreProvider,
    type IUseState
}                           from "@leight/context";
import {
    type IStoreApi,
    type IStoreProps
}                           from "@leight/zustand";
import {
    createStore,
    type StateCreator,
    type StoreApi
}                           from "zustand";
import {createContext}      from "./createContext";
import {createProvider}     from "./createProvider";
import {
    createOptionalUseState,
    createUseState
}                           from "./createUseState";
import {useContext}         from "./useContext";
import {useOptionalContext} from "./useOptionalContext";

/**
 * Typed set of generated components used for working with Store; Provider, states and the others otherwise
 * boilerplate code.
 */
export interface ICrateStoreContext<TStoreProps extends IStoreProps> {
    Provider: IStoreProvider<TStoreProps>;
    useState: IUseState<TStoreProps>;
    useOptionalState: IUseState<TStoreProps | null>;
    useStore: () => StoreApi<TStoreProps>;
    useOptionalStore: () => StoreApi<TStoreProps> | null;
}

export interface ICreateStoreContextProps<TStoreProps extends IStoreProps> {
    store: StateCreator<TStoreProps>,
    name: string,
    defaults?: Partial<TStoreProps>,
    hint?: string
}

/**
 * Creates store hook and provider of Zustand.
 */
export const createStoreContext = <TStoreProps extends IStoreProps>(
    {
        store,
        name,
        defaults,
        hint,
    }: ICreateStoreContextProps<TStoreProps>): ICrateStoreContext<TStoreProps> => {
    const Context = createContext<IStoreApi<TStoreProps>>();
    return {
        Provider: createProvider<TStoreProps>({
            Context,
            createStore: defaults => {
                return createStore<TStoreProps>(($set, $get, $store) => ({
                    ...store($set, $get, $store),
                    ...defaults,
                }));
            },
        }),
        useState:         createUseState(Context, name, hint),
        useOptionalState: createOptionalUseState(Context),
        useStore:         () => useContext(Context, name, hint).store,
        useOptionalStore: () => useOptionalContext(Context)?.store || null,
    };
};
