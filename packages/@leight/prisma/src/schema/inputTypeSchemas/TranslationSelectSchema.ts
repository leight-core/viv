import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const TranslationSelectSchema: z.ZodType<Prisma.TranslationSelect> = z.object({
    id:     z.boolean().optional(),
    locale: z.boolean().optional(),
    label:  z.boolean().optional(),
    text:   z.boolean().optional(),
    hash:   z.boolean().optional(),
}).strict();

export default TranslationSelectSchema;
