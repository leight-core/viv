import {ILocaleConfig}    from "@leight-core/viv";
import dayjs              from "dayjs";
import i18n               from "i18next";
import LanguageDetector   from "i18next-browser-languagedetector";
import moment             from "moment";
import {initReactI18next} from "react-i18next";
import locales            from "./locale.json";

const defaultLocale = {
    dayjs:  "en-gb",
    moment: "en-gb",
    antd:   "en_GB",
};

export const bootstrapLocale = async (): Promise<ILocaleConfig> => {
    await i18n
        .use(initReactI18next)
        .use(LanguageDetector)
        .init({
            initImmediate: true,
            keySeparator:  false,
            nsSeparator:   false,
            interpolation: {
                escapeValue: false,
            },
        });

    dayjs.extend(require("dayjs/plugin/duration"));
    dayjs.extend(require("dayjs/plugin/localeData"));
    dayjs.extend(require("dayjs/plugin/localizedFormat"));
    dayjs.extend(require("dayjs/plugin/relativeTime"));
    dayjs.extend(require("dayjs/plugin/utc"));

    const locale = (locales as any)[i18n.language] || defaultLocale;
    return new Promise<{ antd: any }>(resolver => {
        import(`dayjs/locale/${locale.dayjs}.js`)
            .then(() => dayjs.locale(locale.dayjs))
            .catch(() => console.log(`Cannot import [dayjs/locale/${locale.dayjs}.js].`));
        import(`moment/locale/${locale.moment}.js`)
            .then(() => moment.locale(locale.moment))
            .catch(() => console.log(`Cannot import [moment/locale/${locale.moment}.js].`));
        import(`antd/lib/locale/${locale.antd}.js`)
            .then(({default: antd}) => resolver({antd}));
    });
};
