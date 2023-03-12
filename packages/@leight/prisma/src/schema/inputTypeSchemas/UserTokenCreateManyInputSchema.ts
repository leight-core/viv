import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const UserTokenCreateManyInputSchema: z.ZodType<Prisma.UserTokenCreateManyInput> = z.object({
    id:      z.string().cuid().optional(),
    userId:  z.string(),
    tokenId: z.string()
}).strict();

export default UserTokenCreateManyInputSchema;
