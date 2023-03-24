/**
 Source code of the common stuff for File which could be shared between server and client side.
 */
import {type IUseQuery} from "@leight/react-query";
import {
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
}                       from "./Schema";

export type IUseFileQuery = IUseQuery<IFileSourceSchema["Query"] | undefined, IFileSourceSchema["Entity"][]>;
export type IUseFileCountQuery = IUseQuery<IFileSourceSchema["Query"] | undefined, number>;
export type IUseFileFetchQuery = IUseQuery<IFileSourceSchema["Query"], IFileSourceSchema["Entity"]>;
export type IUseFileFindQuery = IUseQuery<IWithIdentity, IFileSourceSchema["Entity"]>;

export interface IFileSourceSchema extends ISourceSchema<
    IFileSchema,
    IFileCreateSchema,
    IFilePatchSchema,
    IFileFilterSchema,
    IFileSortSchema,
    IFileParamSchema
> {
}