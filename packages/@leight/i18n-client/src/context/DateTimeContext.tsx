/**
 * Documentation
 * @see jetbrains://idea/navigate/reference?project=@leight/viv&path=nextra/pages/docs/workbench/i18n.mdx
 */

import {
    createStoreContext,
    type IStoreProps
}                 from "@leight/context-client";
import {
    DateTime,
    type DateTimeFormatOptions,
    type IDateInput
}                 from "@leight/i18n";
import {isString} from "@leight/utils";
import {
    type ComponentProps,
    type FC
}                 from "react";

/**
 * Store shape for date time context.
 */
export type IDateTimeStoreProps = IStoreProps<{
    /**
     * Take input string in ISO format and reformat it into the user's locale.
     */
    toLocalDate(input?: IDateInput, fallback?: IDateInput): string | undefined;
    /**
     * Take input string in ISO format and return localized date & time
     */
    toLocalDateTime(input?: IDateInput, fallback?: IDateInput): string | undefined;
}>

const iso2locale = (input?: IDateInput, fallback?: IDateInput, opts?: DateTimeFormatOptions): string | undefined => {
    if (!input) {
        input = fallback;
    }
    if (!input) {
        return undefined;
    }
    return (isString(input) ? DateTime.fromISO(input) : DateTime.fromJSDate(input)).toLocaleString(opts);
};

export const {
                 Provider:         DateTimeStoreProvider,
                 useState:         useDateTimeState,
                 useOptionalState: useOptionalDateTimeState,
                 useStore:         useDateTimeStore,
                 useOptionalStore: useOptionalDateTimeStore,
             } = createStoreContext<IDateTimeStoreProps>({
    state: () => () => ({
        toLocalDate(input, fallback) {
            return iso2locale(input, fallback, DateTime.DATE_MED);
        },
        toLocalDateTime(input, fallback) {
            return iso2locale(input, fallback, DateTime.DATETIME_MED);
        },
    }),
    name:  "DateTimeContext",
    hint:  "Add DateTimeStoreProvider.",
});

export interface IDateTimeProviderProps extends Omit<ComponentProps<typeof DateTimeStoreProvider>, "state"> {
}

export const DateTimeProvider: FC<IDateTimeProviderProps> = ({...props}) => {
    return <DateTimeStoreProvider
        {...props}
    />;
};
