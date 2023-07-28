import {preferredLocale} from "preferred-locale";

export interface ILocaleOfProps {
    available: string[];
    fallback: string;
}

/**
 * Extract preferred locale from the available locales and fallback locale.
 */
export const localeOf = (
    {
        available,
        fallback
    }: ILocaleOfProps
) => {
    return preferredLocale(fallback, available, {
        languageOnly: true,
    });
};
