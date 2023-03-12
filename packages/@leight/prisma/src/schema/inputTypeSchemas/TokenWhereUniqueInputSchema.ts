import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const TokenWhereUniqueInputSchema: z.ZodType<Prisma.TokenWhereUniqueInput> = z.object({
    id:   z.string().cuid().optional(),
    name: z.string().optional()
}).strict();

export default TokenWhereUniqueInputSchema;
