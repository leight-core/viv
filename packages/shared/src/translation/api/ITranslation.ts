import {ReactNode} from "react";

/**
 * Generic way how to mark up a translation: usually use text to translate and namespace it
 * belongs to; it also supports value replacement with provided values.
 */
export interface ITranslation<TValues extends Record<string, any> = Record<string, any>> {
    /**
     * Should translate only if "text" is string.
     */
    readonly text?: ReactNode;
    /**
     * Namespace used as a prefix for "text" (by dots, for example "namespace.text")
     */
    readonly namespace?: string;
    /**
     * Values used in translation placeholders.
     */
    readonly values?: TValues;
}
