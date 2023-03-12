import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const TokenUncheckedCreateWithoutUserTokenInputSchema: z.ZodType<Prisma.TokenUncheckedCreateWithoutUserTokenInput> = z.object({
    id:   z.string().optional(),
    name: z.string()
}).strict();

export default TokenUncheckedCreateWithoutUserTokenInputSchema;
