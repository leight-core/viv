import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
    accounts:  z.boolean().optional(),
    sessions:  z.boolean().optional(),
    UserToken: z.boolean().optional(),
    File:      z.boolean().optional(),
    Job:       z.boolean().optional(),
}).strict();

export default UserCountOutputTypeSelectSchema;
