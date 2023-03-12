import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const KeywordUncheckedCreateInputSchema: z.ZodType<Prisma.KeywordUncheckedCreateInput> = z.object({
    id:   z.string().cuid().optional(),
    text: z.string()
}).strict();

export default KeywordUncheckedCreateInputSchema;
