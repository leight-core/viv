import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const TranslationCreateInputSchema: z.ZodType<Prisma.TranslationCreateInput> = z.object({
    id:     z.string().cuid().optional(),
    locale: z.string(),
    label:  z.string(),
    text:   z.string(),
    hash:   z.string(),
}).strict();

export default TranslationCreateInputSchema;
