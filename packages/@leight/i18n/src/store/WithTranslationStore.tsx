"use client";

import {
    createStore,
    type IStoreProps
}                              from "@leight/store";
import {cleanOf}               from "@leight/utils";
import {
    type FC,
    type PropsWithChildren
}                              from "react";
import {type IWithTranslation} from "../utils/IWithTranslation";

export type IWithTranslationStoreProps = IStoreProps<IWithTranslation & {
    withTranslation(withTranslation?: IWithTranslation): IWithTranslation;
}>;

export const WithTranslationStore = createStore<IWithTranslationStoreProps>({
    name:  "WithTranslationStore",
    state: () => (_, get) => ({
        namespace: undefined,
        label:     undefined,
        withLabel: undefined,
        values:    {},
        withTranslation(
            {
                values = {},
                ...withTranslation
            } = {}) {
            const state = get();
            return {
                namespace: state.namespace,
                label:     state.label,
                withLabel: state.withLabel,
                /**
                 * If we've some values, merge them with "defaults", so we can change only some
                 * values while preserving the others.
                 */
                values: {
                    ...state.values,
                    ...values,
                },
                /**
                 * Override rest of default values, if provided
                 */
                ...cleanOf(withTranslation || {}),
            };
        }
    }),
});

export type IWithTranslationProviderProps = PropsWithChildren<{
    withTranslation?: IWithTranslation;
}>;

export const WithTranslationProvider: FC<IWithTranslationProviderProps> = (
    {
        withTranslation,
        children
    }) => {
    return <WithTranslationStore.Provider
        defaults={withTranslation ? {
            ...withTranslation,
        } : undefined}
    >
        {children}
    </WithTranslationStore.Provider>;
};
