import {ILocaleConfig}    from "@leight-core/api";
import dayjs              from "dayjs";
import duration           from "dayjs/plugin/duration";
import localeData         from "dayjs/plugin/localeData";
import localizedFormat    from "dayjs/plugin/localizedFormat";
import relativeTime       from "dayjs/plugin/relativeTime";
import utc                from "dayjs/plugin/utc";
import i18n               from "i18next";
import LanguageDetector   from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import locales            from "./locale.json";

dayjs.extend(duration);
dayjs.extend(localeData);
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);
dayjs.extend(utc);

const defaultLocale = {
	dayjs: "en-gb",
	antd:  "en_GB",
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
	const locale = (locales as any)[i18n.language] || defaultLocale;
	return new Promise<{ antd: any }>(resolver => {
		import(`dayjs/locale/${locale.dayjs}.js`)
			.then(() => dayjs.locale(locale.dayjs))
			.catch(() => console.log(`Cannot import [dayjs/locale/${locale.dayjs}.js].`));
		import(`antd/lib/locale/${locale.antd}.js`)
			.then(({default: antd}) => resolver({antd}));
	});
};
