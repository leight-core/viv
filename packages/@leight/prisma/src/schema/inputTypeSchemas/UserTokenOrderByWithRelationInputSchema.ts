import type {Prisma}                         from "@prisma/client";
import {z}                                   from "zod";
import {SortOrderSchema}                     from "./SortOrderSchema";
import {TokenOrderByWithRelationInputSchema} from "./TokenOrderByWithRelationInputSchema";
import {UserOrderByWithRelationInputSchema}  from "./UserOrderByWithRelationInputSchema";

export const UserTokenOrderByWithRelationInputSchema: z.ZodType<Prisma.UserTokenOrderByWithRelationInput> = z.object({
    id:      z.lazy(() => SortOrderSchema).optional(),
    userId:  z.lazy(() => SortOrderSchema).optional(),
    tokenId: z.lazy(() => SortOrderSchema).optional(),
    user:    z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
    token:   z.lazy(() => TokenOrderByWithRelationInputSchema).optional(),
}).strict();

export default UserTokenOrderByWithRelationInputSchema;
