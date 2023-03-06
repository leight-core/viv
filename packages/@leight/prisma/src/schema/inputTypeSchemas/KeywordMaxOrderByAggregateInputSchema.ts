import type {Prisma}     from "@prisma/client";
import {z}               from "zod";
import {SortOrderSchema} from "./SortOrderSchema";

export const KeywordMaxOrderByAggregateInputSchema: z.ZodType<Prisma.KeywordMaxOrderByAggregateInput> = z.object({
    id:   z.lazy(() => SortOrderSchema).optional(),
    text: z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default KeywordMaxOrderByAggregateInputSchema;
