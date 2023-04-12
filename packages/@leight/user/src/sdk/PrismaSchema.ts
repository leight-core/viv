/**
	This is a file generated by MCP (managed code pattern) approach.
    
    So, please, DO NOT modify this file as it would get re-generated and you would be f*cked up.
 */
import {
	UserSchema as $EntitySchema,
	UserOptionalDefaultsSchema,
	UserPartialSchema,
	UserWhereInputSchema,
	UserWhereUniqueInputSchema,
	UserOrderByWithRelationInputSchema
} from "@leight/prisma";
import {FilterSchema} from "@leight/filter";
import {
	ParamsSchema,
	QuerySchema
} from "@leight/query";
import {SortOrderSchema} from "@leight/sort";
import {WithIdentitySchema} from "@leight/source";
import {z} from "@leight/zod";

export type IUserWhereSchema = typeof UserWhereSchema;
export type IUserWhere = z.infer<IUserWhereSchema>;
export type IUserWhereUniqueSchema = typeof UserWhereUniqueSchema;
export type IUserWhereUnique = z.infer<IUserWhereUniqueSchema>;
export type IUserOrderBySchema = typeof UserOrderBySchema;
export type IUserOrderBy = z.infer<IUserOrderBySchema>;
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

export const UserWhereSchema = UserWhereInputSchema;
export const UserWhereUniqueSchema = UserWhereUniqueInputSchema;
export const UserOrderBySchema = UserOrderByWithRelationInputSchema;
/**
 * Schema definition for User
 */
export const UserSchema = $EntitySchema;
export const UserCreateSchema = UserOptionalDefaultsSchema;
export const UserPatchSchema = UserPartialSchema.merge(WithIdentitySchema);
export const UserFilterSchema = z.union([
    UserWhereSchema,
    UserWhereUniqueSchema,
    FilterSchema,
]);
export const UserParamSchema = ParamsSchema;
export const UserSortSchema = z.object({
    id: SortOrderSchema
});
/**
 * Query definition for User
 */
export const UserQuerySchema = QuerySchema({
    filterSchema: UserFilterSchema,
    sortSchema:   UserSortSchema,
    paramsSchema: UserParamSchema,
});
/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_bgjirj9cilk3w8yb3buacqs0 = true;