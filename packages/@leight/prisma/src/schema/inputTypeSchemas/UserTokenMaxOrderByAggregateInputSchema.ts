import type {Prisma}     from "@prisma/client";
import {z}               from "zod";
import {SortOrderSchema} from "./SortOrderSchema";

export const UserTokenMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserTokenMaxOrderByAggregateInput> = z.object({
    id:      z.lazy(() => SortOrderSchema).optional(),
    userId:  z.lazy(() => SortOrderSchema).optional(),
    tokenId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default UserTokenMaxOrderByAggregateInputSchema;
