import {IQueryHook} from "@leight-core/api";
import {i18n}       from "i18next";
import {ReactNode}  from "react";

export interface II18NextContext {
	readonly i18next: i18n;
}

export interface ITranslation {
	readonly id: string;
	readonly key: string;
	readonly value: string;
	readonly language: string;
}

export interface ITranslations {
	readonly language: string;
	readonly namespace?: string;
	readonly translations: ITranslation[];
}

export interface ITranslationBundle {
	readonly bundles: ITranslations[];
}

export type ITranslationsQuery = IQueryHook<void, ITranslationBundle>;

export interface ITranslationProps {
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
	readonly values?: Record<string, any>;
}
