import type {Prisma}                                  from "@prisma/client";
import {z}                                            from "zod";
import {AccountOrderByRelationAggregateInputSchema}   from "./AccountOrderByRelationAggregateInputSchema";
import {FileOrderByRelationAggregateInputSchema}      from "./FileOrderByRelationAggregateInputSchema";
import {JobOrderByRelationAggregateInputSchema}       from "./JobOrderByRelationAggregateInputSchema";
import {SessionOrderByRelationAggregateInputSchema}   from "./SessionOrderByRelationAggregateInputSchema";
import {SortOrderSchema}                              from "./SortOrderSchema";
import {UserTokenOrderByRelationAggregateInputSchema} from "./UserTokenOrderByRelationAggregateInputSchema";

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
    id:            z.lazy(() => SortOrderSchema).optional(),
    name:          z.lazy(() => SortOrderSchema).optional(),
    email:         z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    image:         z.lazy(() => SortOrderSchema).optional(),
    accounts:      z.lazy(() => AccountOrderByRelationAggregateInputSchema).optional(),
    sessions:      z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional(),
    UserToken:     z.lazy(() => UserTokenOrderByRelationAggregateInputSchema).optional(),
    File:          z.lazy(() => FileOrderByRelationAggregateInputSchema).optional(),
    Job:           z.lazy(() => JobOrderByRelationAggregateInputSchema).optional()
}).strict();

export default UserOrderByWithRelationInputSchema;
