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
import {SortOrderSchema} from "@leight/sort";
import {
	type IContainer,
	ServiceContext
} from "@leight/container";
import {
	withSourceExSchema,
	type InferSourceExSchema,
	type IUseSourceQuery,
	WithIdentitySchema,
	type ISource,
	type InferSourceSchema,
	withSourceSchema,
	ToCreateSchema,
	ToPatchSchema
} from "@leight/source";
import {z} from "@leight/zod";
import {ParamsSchema} from "@leight/query";
import {IUserSourceEx} from "../api";

export type IUserSourceSchema = InferSourceSchema<typeof UserSourceSchema>;
export type IUserPrismaSchema = InferSourceExSchema<typeof UserPrismaSchema>;
export type IUseUserSourceQuery = IUseSourceQuery<IUserSourceSchema>;

export interface IUserSource extends ISource<IUserSourceSchema>, IUserSourceEx {
}

export const UserPrismaSchema = withSourceExSchema({
    WhereSchema:       UserWhereInputSchema,
    WhereUniqueSchema: UserWhereUniqueInputSchema,
    OrderBySchema:     UserOrderByWithRelationInputSchema,
});
export const UserSourceSchema = withSourceSchema({
    EntitySchema: $EntitySchema,
    ToCreateSchema: ToCreateSchema,
    CreateSchema: UserOptionalDefaultsSchema,
    ToPatchSchema: ToPatchSchema,
    PatchSchema: UserPartialSchema.merge(WithIdentitySchema),
    FilterSchema: z.union([
        UserWhereInputSchema,
        UserWhereUniqueInputSchema,
        FilterSchema,
    ]),
    ParamsSchema: ParamsSchema,
    SortSchema: z.object({
        id: SortOrderSchema
    }),
});
export const $UserSource = Symbol.for("@leight/user/IUserSource");
export const UserSourceContext = (container: IContainer) => new ServiceContext<IUserSource>(container, $UserSource);
/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_shfv3s41vgo2zy92udh0f05i = true;