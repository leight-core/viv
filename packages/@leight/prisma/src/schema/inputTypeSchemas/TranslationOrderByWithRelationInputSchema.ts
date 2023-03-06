import type {Prisma}     from "@prisma/client";
import {z}               from "zod";
import {SortOrderSchema} from "./SortOrderSchema";

export const TranslationOrderByWithRelationInputSchema: z.ZodType<Prisma.TranslationOrderByWithRelationInput> = z.object({
    id:     z.lazy(() => SortOrderSchema).optional(),
    locale: z.lazy(() => SortOrderSchema).optional(),
    label:  z.lazy(() => SortOrderSchema).optional(),
    text:   z.lazy(() => SortOrderSchema).optional(),
    hash:   z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default TranslationOrderByWithRelationInputSchema;