// Generated file
import {type IUseQuery} from "@leight/react-query";
import {
    type ISource,
    type ISourceSchema,
    type IWithIdentity
}                       from "@leight/source";
import {
    type IFileCreateSchema,
    type IFileFilterSchema,
    type IFileParamSchema,
    type IFilePatchSchema,
    type IFileSchema,
    type IFileSortSchema
}                       from "./entity-schema";

export type IUseFileFetchQuery = IUseQuery<IFileSourceSchema["Query"], IFileSourceSchema["Entity"]>;
export type IUseFileFindQuery = IUseQuery<IWithIdentity, IFileSourceSchema["Entity"]>;

export interface IFileSource extends ISource<IFileSourceSchema> {
}

export interface IFileSourceSchema extends ISourceSchema<
    IFileSchema,
    IFileCreateSchema,
    IFilePatchSchema,
    IFileFilterSchema,
    IFileSortSchema,
    IFileParamSchema
> {
}

export const $FileSource = Symbol.for("@leight/file/IFileSource");
