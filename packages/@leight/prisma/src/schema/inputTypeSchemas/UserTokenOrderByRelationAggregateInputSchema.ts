import type {Prisma}     from "@prisma/client";
import {z}               from "zod";
import {SortOrderSchema} from "./SortOrderSchema";

export const UserTokenOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UserTokenOrderByRelationAggregateInput> = z.object({
    _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default UserTokenOrderByRelationAggregateInputSchema;
