import type {Prisma}               from "@prisma/client";
import {z}                         from "zod";
import {UserTokenWhereInputSchema} from "../inputTypeSchemas/UserTokenWhereInputSchema";

export const UserTokenDeleteManyArgsSchema: z.ZodType<Prisma.UserTokenDeleteManyArgs> = z.object({
    where: UserTokenWhereInputSchema.optional(),
}).strict();

export default UserTokenDeleteManyArgsSchema;
