import {type ISource}      from "@leight/source";
import {IFileSourceConfig} from "./IFileSourceConfig";

export interface IFileSource extends ISource<IFileSourceConfig> {
}

export const $FileSource = Symbol.for("@leight/file/FileSource");
