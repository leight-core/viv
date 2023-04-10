import {
    type FC,
    type ReactNode
} from "react";
import {
    type IStateCreatorProps,
    type IStoreApi,
    type IStoreProps
} from "../../@zustand";

export type IContextRender<TContext> = (context: TContext) => ReactNode;

export type IProviderChildren<TContext> =
    ReactNode
    | IContextRender<TContext>;

export type IStoreProviderProps<TStoreProps extends IStoreProps> =
    {
        children: IProviderChildren<IStoreApi<TStoreProps>>;
    }
    & IStateCreatorProps<TStoreProps>;

export type IStoreProvider<TStoreProps extends IStoreProps> = FC<IStoreProviderProps<TStoreProps>>;

/**
 * Use state of a store with an optional state selector
 */
export interface IUseState<TStoreProps extends IStoreProps> {
    <U>(selector: (state: TStoreProps["StoreProps"]) => U): U;

    (): TStoreProps["StoreProps"];
}

export interface IUseOptionalState<TStoreProps extends IStoreProps> {
    <U>(selector: (state: TStoreProps["StoreProps"] | null) => U): U;

    (): TStoreProps["StoreProps"] | null;
}
