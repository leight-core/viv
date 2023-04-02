/**
 * Which types are accepted as input type for formatting functions.
 */
export type IDateInput =
    string
    | Date;

/**
 * Type for useTranslation() `t` function.
 */
export type IWithTranslator = (text: string | string[], valuesOrDefault?: Record<string, any> | string, values?: Record<string, any> | string) => string;

export interface IWithTranslation {
    label?: string;
    namespace?: string;
    values?: Record<string, unknown>;
}

/**
 * Just marks an input using a locale.
 */
export interface IWithLocale {
    locale: string;
}

export * from "./weeks";
export * from "./months";
