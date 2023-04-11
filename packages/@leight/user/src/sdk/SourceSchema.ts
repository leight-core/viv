/**
 Source code of the common stuff for User which could be shared between server and client side.
 */
import {type IUseQuery} from "@leight/react-query";
import {
    type ISourceSchema,
    type IWithIdentity
}                       from "@leight/source";
import {
    type IUserCreateSchema,
    type IUserFilterSchema,
    type IUserParamSchema,
    type IUserPatchSchema,
    type IUserSchema,
    type IUserSortSchema
}                       from "./PrismaSchema";

export type IUseUserQuery = IUseQuery<IUserSourceSchema["Query"] | undefined, IUserSourceSchema["Entity"][]>;
export type IUseUserCountQuery = IUseQuery<IUserSourceSchema["Query"] | undefined, number>;
export type IUseUserFetchQuery = IUseQuery<IUserSourceSchema["Query"], IUserSourceSchema["Entity"]>;
export type IUseUserFindQuery = IUseQuery<IWithIdentity, IUserSourceSchema["Entity"]>;

export interface IUserSourceSchema extends ISourceSchema<
    IUserSchema,
    IUserCreateSchema,
    IUserPatchSchema,
    IUserFilterSchema,
    IUserSortSchema,
    IUserParamSchema
> {
}

/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_g9k1sm4vy055o1oimudh1xgd = true;
