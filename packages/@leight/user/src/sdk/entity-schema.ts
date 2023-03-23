// Generated file
import {FilterSchema}       from "@leight/filter";
import {PrismaSchema}       from "@leight/prisma";
import {
    ParamsSchema,
    QuerySchema
}                           from "@leight/query";
import {WithIdentitySchema} from "@leight/source";
import {z}                  from "zod";

export type IUserSchema = typeof UserSchema;
export type IUser = z.infer<IUserSchema>;
export type IUserCreateSchema = typeof UserCreateSchema;
export type IUserCreate = z.infer<IUserCreateSchema>;
export type IUserPatchSchema = typeof UserPatchSchema;
export type IUserPatch = z.infer<IUserPatchSchema>;
export type IUserFilterSchema = typeof UserFilterSchema;
export type IUserFilter = z.infer<IUserFilterSchema>;
export type IUserParamSchema = typeof UserParamSchema;
export type IUserParam = z.infer<IUserParamSchema>;
export type IUserSortSchema = typeof UserSortSchema;
export type IUserSort = z.infer<IUserSortSchema>;
export type IUserQuerySchema = typeof UserQuerySchema;
export type IUserQuery = z.infer<IUserQuerySchema>;

export const UserSchema       = PrismaSchema.UserSchema;
export const UserCreateSchema = PrismaSchema.UserOptionalDefaultsSchema;
export const UserPatchSchema  = PrismaSchema.UserPartialSchema.merge(WithIdentitySchema);
export const UserFilterSchema = z.union([
    PrismaSchema.UserWhereInputSchema,
    PrismaSchema.UserWhereUniqueInputSchema,
    FilterSchema,
]);
export const UserParamSchema  = ParamsSchema;
export const UserSortSchema   = z.object({});
export const UserQuerySchema  = QuerySchema({
    filterSchema: UserFilterSchema,
    sortSchema:   UserSortSchema,
    paramsSchema: UserParamSchema,
});
