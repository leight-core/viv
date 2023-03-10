import {type ISource}           from "@leight/source";
import {type IFileSourceSchema} from "./IFileSourceSchema";

export interface IFileSource extends ISource<IFileSourceSchema> {
}

export const $FileSource = Symbol.for("@leight/file/FileSource");
