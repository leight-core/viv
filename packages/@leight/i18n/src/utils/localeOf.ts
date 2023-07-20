import {preferredLocale} from "preferred-locale";

export interface ILocaleOfProps {
    available: string[];
    fallback: string;
}

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
