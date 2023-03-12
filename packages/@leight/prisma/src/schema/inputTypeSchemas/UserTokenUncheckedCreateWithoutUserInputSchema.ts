import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const UserTokenUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UserTokenUncheckedCreateWithoutUserInput> = z.object({
    id:      z.string().optional(),
    tokenId: z.string()
}).strict();

export default UserTokenUncheckedCreateWithoutUserInputSchema;
