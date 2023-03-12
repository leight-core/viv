import type {Prisma}                             from "@prisma/client";
import {z}                                       from "zod";
import {AccountAvgOrderByAggregateInputSchema}   from "./AccountAvgOrderByAggregateInputSchema";
import {AccountCountOrderByAggregateInputSchema} from "./AccountCountOrderByAggregateInputSchema";
import {AccountMaxOrderByAggregateInputSchema}   from "./AccountMaxOrderByAggregateInputSchema";
import {AccountMinOrderByAggregateInputSchema}   from "./AccountMinOrderByAggregateInputSchema";
import {AccountSumOrderByAggregateInputSchema}   from "./AccountSumOrderByAggregateInputSchema";
import {SortOrderSchema}                         from "./SortOrderSchema";

export const AccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> = z.object({
    id:                z.lazy(() => SortOrderSchema).optional(),
    userId:            z.lazy(() => SortOrderSchema).optional(),
    type:              z.lazy(() => SortOrderSchema).optional(),
    provider:          z.lazy(() => SortOrderSchema).optional(),
    providerAccountId: z.lazy(() => SortOrderSchema).optional(),
    refresh_token:     z.lazy(() => SortOrderSchema).optional(),
    access_token:      z.lazy(() => SortOrderSchema).optional(),
    expires_at:        z.lazy(() => SortOrderSchema).optional(),
    token_type:        z.lazy(() => SortOrderSchema).optional(),
    scope:             z.lazy(() => SortOrderSchema).optional(),
    id_token:          z.lazy(() => SortOrderSchema).optional(),
    session_state:     z.lazy(() => SortOrderSchema).optional(),
    _count:            z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
    _avg:              z.lazy(() => AccountAvgOrderByAggregateInputSchema).optional(),
    _max:              z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
    _min:              z.lazy(() => AccountMinOrderByAggregateInputSchema).optional(),
    _sum:              z.lazy(() => AccountSumOrderByAggregateInputSchema).optional()
}).strict();

export default AccountOrderByWithAggregationInputSchema;
