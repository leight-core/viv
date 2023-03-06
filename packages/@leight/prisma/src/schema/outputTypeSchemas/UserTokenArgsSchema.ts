import {type Prisma}            from "@prisma/client";
import {z}                      from "zod";
import {UserTokenIncludeSchema} from "../inputTypeSchemas/UserTokenIncludeSchema";
import {UserTokenSelectSchema}  from "../inputTypeSchemas/UserTokenSelectSchema";

export const UserTokenArgsSchema: z.ZodType<Prisma.UserTokenArgs> = z.object({
    select:  z.lazy(() => UserTokenSelectSchema).optional(),
    include: z.lazy(() => UserTokenIncludeSchema).optional(),
}).strict();

export default UserTokenArgsSchema;
