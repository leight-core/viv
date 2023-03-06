import type {Prisma}                             from "@prisma/client";
import {z}                                       from "zod";
import {UserTokenUncheckedUpdateManyInputSchema} from "../inputTypeSchemas/UserTokenUncheckedUpdateManyInputSchema";
import {UserTokenUpdateManyMutationInputSchema}  from "../inputTypeSchemas/UserTokenUpdateManyMutationInputSchema";
import {UserTokenWhereInputSchema}               from "../inputTypeSchemas/UserTokenWhereInputSchema";

export const UserTokenUpdateManyArgsSchema: z.ZodType<Prisma.UserTokenUpdateManyArgs> = z.object({
    data:  z.union([
        UserTokenUpdateManyMutationInputSchema,
        UserTokenUncheckedUpdateManyInputSchema
    ]),
    where: UserTokenWhereInputSchema.optional(),
}).strict();

export default UserTokenUpdateManyArgsSchema;
