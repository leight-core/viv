import type {Prisma}     from "@prisma/client";
import {z}               from "zod";
import {SortOrderSchema} from "./SortOrderSchema";

export const FileSumOrderByAggregateInputSchema: z.ZodType<Prisma.FileSumOrderByAggregateInput> = z.object({
    size: z.lazy(() => SortOrderSchema).optional(),
    ttl:  z.lazy(() => SortOrderSchema).optional(),
}).strict();

export default FileSumOrderByAggregateInputSchema;
