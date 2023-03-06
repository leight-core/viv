import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const TranslationLocaleHashCompoundUniqueInputSchema: z.ZodType<Prisma.TranslationLocaleHashCompoundUniqueInput> = z.object({
    locale: z.string(),
    hash:   z.string(),
}).strict();

export default TranslationLocaleHashCompoundUniqueInputSchema;
