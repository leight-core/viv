import {createStoreContext} from "@leight/context-client";
import i18next, {i18n}      from "i18next";

export interface I18NextStoreProps {
    readonly i18next: i18n;

    setI18Next(i18next: i18n): void;
}

export const {
                 Provider:         I18NextProvider,
                 useStore:         useI18NextStore,
                 useOptionalStore: useOptionalI18NextStore,
                 useState:         useI18NextState,
                 useOptionalState: useOptionalI18NextState,
             } = createStoreContext<I18NextStoreProps>(
    (set) => ({
        i18next,
        setI18Next(i18next) {
            set({i18next});
        }
    }),
    "I18NextProvider",
    "Add I18NextProvider"
);
