import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const TokenCreateManyInputSchema: z.ZodType<Prisma.TokenCreateManyInput> = z.object({
    id:   z.string().cuid().optional(),
    name: z.string(),
}).strict();

export default TokenCreateManyInputSchema;
