import * as dayjs from "dayjs";
import {
    type ConfigType,
    type Dayjs
}                 from "dayjs";

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

export type IDayjs = typeof dayjs;
export type IDayjsInput = ConfigType;
export type IDayjsOutput = Dayjs;
