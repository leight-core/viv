import {type IWithTranslator} from "@leight/i18n";
import {useI18NextState}      from "../store";

export const useTranslation = (namespace?: string[] | string): { t: IWithTranslator } => {
    const i18next = useI18NextState(({i18next}) => i18next);
    return {t: namespace ? i18next.getFixedT(null, namespace) : i18next.t};
};
