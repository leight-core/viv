import {ITranslationEntity} from "@leight/shared";

export interface ITranslations {
    readonly language: string;
    readonly namespace?: string;
    readonly translations: ITranslationEntity[];
}
