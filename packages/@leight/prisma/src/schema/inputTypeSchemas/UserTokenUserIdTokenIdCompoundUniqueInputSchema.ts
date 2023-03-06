import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const UserTokenUserIdTokenIdCompoundUniqueInputSchema: z.ZodType<Prisma.UserTokenUserIdTokenIdCompoundUniqueInput> = z.object({
    userId:  z.string(),
    tokenId: z.string(),
}).strict();

export default UserTokenUserIdTokenIdCompoundUniqueInputSchema;
