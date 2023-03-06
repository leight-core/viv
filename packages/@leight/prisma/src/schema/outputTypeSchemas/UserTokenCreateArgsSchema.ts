import type {Prisma}                         from "@prisma/client";
import {z}                                   from "zod";
import {UserTokenCreateInputSchema}          from "../inputTypeSchemas/UserTokenCreateInputSchema";
import {UserTokenIncludeSchema}              from "../inputTypeSchemas/UserTokenIncludeSchema";
import {UserTokenUncheckedCreateInputSchema} from "../inputTypeSchemas/UserTokenUncheckedCreateInputSchema";
import {TokenArgsSchema}                     from "../outputTypeSchemas/TokenArgsSchema";
import {UserArgsSchema}                      from "../outputTypeSchemas/UserArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserTokenSelectSchema: z.ZodType<Prisma.UserTokenSelect> = z.object({
    id:      z.boolean().optional(),
    userId:  z.boolean().optional(),
    tokenId: z.boolean().optional(),
    user:    z.union([
        z.boolean(),
        z.lazy(() => UserArgsSchema)
    ]).optional(),
    token:   z.union([
        z.boolean(),
        z.lazy(() => TokenArgsSchema)
    ]).optional(),
}).strict();

export const UserTokenCreateArgsSchema: z.ZodType<Prisma.UserTokenCreateArgs> = z.object({
    select:  UserTokenSelectSchema.optional(),
    include: UserTokenIncludeSchema.optional(),
    data:    z.union([
        UserTokenCreateInputSchema,
        UserTokenUncheckedCreateInputSchema
    ]),
}).strict()

export default UserTokenCreateArgsSchema;
