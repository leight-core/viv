import {type Interface}    from "@leight/source";
import {IFileSourceConfig} from "./IFileSourceConfig";

export interface IFileSource extends Interface<IFileSourceConfig> {
}

export const $FileSource = Symbol.for("@leight/file/FileSource");
