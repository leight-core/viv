/**
 Source code of the common stuff for User which could be shared between server and client side.
 */
import {type IUseQuery}     from "@leight/react-query";
import {
    type ISource,
    type ISourceSchema,
    type IWithIdentity
}                           from "@leight/source";
import {type IUserSourceEx} from "../api";
import {
    type IUserCreateSchema,
    type IUserFilterSchema,
    type IUserParamSchema,
    type IUserPatchSchema,
    type IUserSchema,
    type IUserSortSchema
}                           from "./entity-schema";

export type IUseUserFetchQuery = IUseQuery<IUserSourceSchema["Query"], IUserSourceSchema["Entity"]>;
export type IUseUserFindQuery = IUseQuery<IWithIdentity, IUserSourceSchema["Entity"]>;

export interface IUserSource extends ISource<IUserSourceSchema>, IUserSourceEx {
}

export interface IUserSourceSchema extends ISourceSchema<
    IUserSchema,
    IUserCreateSchema,
    IUserPatchSchema,
    IUserFilterSchema,
    IUserSortSchema,
    IUserParamSchema
> {
}

export const $UserSource = Symbol.for("@leight/user/IUserSource");
