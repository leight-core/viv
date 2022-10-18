import {IEntity} from "@leight/shared";

export interface ITranslationEntity extends IEntity {
    readonly id: string;
    readonly key: string;
    readonly value: string;
    readonly language: string;
}
