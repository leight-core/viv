import {
    IImportTabs,
    IImportTranslations
} from "@leight/server";

export interface IImportMeta {
    tabs: IImportTabs[];
    translations: IImportTranslations;
}
