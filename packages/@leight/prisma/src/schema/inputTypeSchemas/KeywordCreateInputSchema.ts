import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const KeywordCreateInputSchema: z.ZodType<Prisma.KeywordCreateInput> = z.object({
    id:   z.string().cuid().optional(),
    text: z.string(),
}).strict();

export default KeywordCreateInputSchema;
