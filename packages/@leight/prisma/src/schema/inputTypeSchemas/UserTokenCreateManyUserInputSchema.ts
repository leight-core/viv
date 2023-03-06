import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const UserTokenCreateManyUserInputSchema: z.ZodType<Prisma.UserTokenCreateManyUserInput> = z.object({
    id:      z.string().cuid().optional(),
    tokenId: z.string(),
}).strict();

export default UserTokenCreateManyUserInputSchema;
