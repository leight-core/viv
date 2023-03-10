import type {Prisma}     from "@prisma/client";
import {z}               from "zod";
import {TokenArgsSchema} from "../outputTypeSchemas/TokenArgsSchema";
import {UserArgsSchema}  from "../outputTypeSchemas/UserArgsSchema";

export const UserTokenIncludeSchema: z.ZodType<Prisma.UserTokenInclude> = z.object({
    user:  z.union([
        z.boolean(),
        z.lazy(() => UserArgsSchema)
    ]).optional(),
    token: z.union([
        z.boolean(),
        z.lazy(() => TokenArgsSchema)
    ]).optional(),
}).strict();

export default UserTokenIncludeSchema;
