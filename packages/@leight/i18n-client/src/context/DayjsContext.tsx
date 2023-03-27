/**
 * Documentation
 * @see jetbrains://idea/navigate/reference?project=@leight/viv&path=nextra/pages/docs/workbench/dayjs.mdx
 */

import {
    createStoreContext,
    type IStoreProps
}                      from "@leight/context-client";
import {
    defaultLocale,
    type IAvailableLocales,
    type IDayjs,
    type IDayjsInput,
    type IDayjsOutput,
    locales
}                      from "@leight/i18n";
import dayjs           from "dayjs";
import duration        from "dayjs/plugin/duration";
import localeData      from "dayjs/plugin/localeData";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime    from "dayjs/plugin/relativeTime";
import utc             from "dayjs/plugin/utc";
import weekday         from "dayjs/plugin/weekday";
import {
    type ComponentProps,
    type FC,
    type ReactNode,
    useEffect,
    useState
}                      from "react";

/**
 * Store shape for Dayjs context.
 */
export type IDayjsStoreProps = IStoreProps<{
    /**
     * Tak an input and ensure you have Dayjs as an output
     */
    wrap(input?: IDayjsInput | null, fallback?: IDayjsInput | null): IDayjsOutput | null;
    /**
     * Convert input to UTC (usually used when sending dates to the server)
     */
    toUtcDateTime({input, format, fallback}: IDayjsStoreProps.IToUtcDateTimeProps): string | null;
    /**
     * Convert an arbitrary input to user's localized date (usually used when you got data from server)
     */
    toLocalDate(input?: IDayjsInput | null, fallback?: string): string;
    /**
     * Convert an arbitrary input to user's localized datetime
     */
    toLocalDateTime(input?: IDayjsInput | null, fallback?: string): string;
}, {
    /**
     * dayjs instance with all plugins and other stuff you need to work with
     */
    readonly dayjs: IDayjs;
    /**
     * dayjs specific locale; usually different libraries are using different naming convention, so you
     * can have once 'cs', another time 'cs_CZ' and so on; this locale ensures it's compatible with provided
     * locales by dayjs (and should **not** be used elsewhere.
     */
    readonly locale: string;
}>

export namespace IDayjsStoreProps {
    export interface IToUtcDateTimeProps {
        input?: IDayjsInput | null;
        fallback?: string | null;
        format?: string;
    }
}

export const {
                 Provider:         DayjsStoreProvider,
                 useState:         useDayjsState,
                 useOptionalState: useOptionalDayjsState,
                 useStore:         useDayjsStore,
                 useOptionalStore: useOptionalDayjsStore,
             } = createStoreContext<IDayjsStoreProps>({
    state: ({state}) => (set, get) => ({
        wrap(input, fallback = null) {
            const {dayjs} = get();
            return input ? dayjs(input) : (fallback ? dayjs(fallback) : null);
        },
        toUtcDateTime({input, format, fallback = null}) {
            try {
                const {dayjs} = get();
                return input ? (dayjs(input) as any).utc().format(format) : fallback;
            } catch (e) {
                console.error("Dayjs does not have registered utc() plugin!", "https://day.org/docs/en/plugin/utc", e);
                return fallback;
            }
        },
        toLocalDate(input, fallback = "-") {
            const {dayjs} = get();
            return input ? dayjs(input).format("L") : fallback;
        },
        toLocalDateTime(input, fallback = "-") {
            const {dayjs} = get();
            return input ? dayjs(input).format("L LTS") : fallback;
        },
        ...state,
    }),
    name:  "DayjsContext",
    hint:  "Add DayjsProvider.",
});

export interface IDayjsProviderProps extends Omit<ComponentProps<typeof DayjsStoreProvider>, "state"> {
    locale: IAvailableLocales;
    loading: ReactNode;
}

export const DayjsProvider: FC<IDayjsProviderProps> = ({locale, loading, ...props}) => {
    const [$locale, $setLocale] = useState<string>();

    useEffect(() => {
        (async () => {
            dayjs.extend(duration);
            dayjs.extend(localeData);
            dayjs.extend(localizedFormat);
            dayjs.extend(relativeTime);
            dayjs.extend(weekday);
            dayjs.extend(utc);
        })().catch(console.error);
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const $locale = (locales [locale] || defaultLocale).dayjs;
                dayjs.locale(await import(`dayjs/locale/${$locale}.js`));
                $setLocale($locale);
            } catch (e) {
                console.error(e);
            }
        })().catch(console.error);
    }, [locale]);

    return $locale ? <DayjsStoreProvider
        state={{
            dayjs,
            locale: $locale,
        }}
        {...props}
    /> : <>{loading}</>;
};
