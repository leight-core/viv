import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const UserTokenUncheckedCreateWithoutTokenInputSchema: z.ZodType<Prisma.UserTokenUncheckedCreateWithoutTokenInput> = z.object({
    id:     z.string().optional(),
    userId: z.string(),
}).strict();

export default UserTokenUncheckedCreateWithoutTokenInputSchema;
