import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const KeywordWhereUniqueInputSchema: z.ZodType<Prisma.KeywordWhereUniqueInput> = z.object({
    id:   z.string().cuid().optional(),
    text: z.string().optional()
}).strict();

export default KeywordWhereUniqueInputSchema;
