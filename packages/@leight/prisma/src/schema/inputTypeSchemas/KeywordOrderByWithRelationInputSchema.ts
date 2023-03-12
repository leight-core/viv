import type {Prisma}     from "@prisma/client";
import {z}               from "zod";
import {SortOrderSchema} from "./SortOrderSchema";

export const KeywordOrderByWithRelationInputSchema: z.ZodType<Prisma.KeywordOrderByWithRelationInput> = z.object({
    id:   z.lazy(() => SortOrderSchema).optional(),
    text: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default KeywordOrderByWithRelationInputSchema;
