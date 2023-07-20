import {
    createContext,
    useContext,
    useContext$
}                                       from "@leight/context";
import {createStore as coolCreateStore} from "zustand";
import {ICreateStoreContextProps}       from "../$export/ICreateStoreContextProps";
import {IStore}                         from "../$export/IStore";
import {IStoreApi}                      from "../$export/IStoreApi";
import {IStoreProps}                    from "../$export/IStoreProps";
import {withStoreProvider}              from "./withStoreProvider";
import {withUseState}                   from "./withUseState";
import {withUseState$}                  from "./withUseState$";

/**
 * Creates store hook and provider of Zustand.
 */
export const createStore = <TStoreProps extends IStoreProps>(
    {
        state,
        name,
        hint,
    }: ICreateStoreContextProps<TStoreProps>): IStore<TStoreProps> => {
    const Context = createContext<IStoreApi<TStoreProps>>();
    return {
        name,
        Provider:  withStoreProvider<TStoreProps>({
            name,
            Context,
            createStore: ({
                              defaults: $defaults,
                              state:    $state
                          }) => coolCreateStore<TStoreProps["StoreProps"]>(($set, $get, $store) => ({
                ...state({
                    defaults: $defaults,
                    state:    $state
                })($set, $get, $store),
                ...$defaults,
            })),
        }),
        use:       withUseState(Context, name, hint),
        use$:      withUseState$(Context),
        useStore:  () => useContext(Context, name, hint).store,
        useStore$: () => useContext$(Context)?.store || null,
    };
};
