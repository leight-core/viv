import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const KeywordCreateManyInputSchema: z.ZodType<Prisma.KeywordCreateManyInput> = z.object({
    id:   z.string().cuid().optional(),
    text: z.string(),
}).strict();

export default KeywordCreateManyInputSchema;
