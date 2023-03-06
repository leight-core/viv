import type {Prisma}                                      from "@prisma/client";
import {z}                                                from "zod";
import {UserTokenCreateNestedManyWithoutTokenInputSchema} from "./UserTokenCreateNestedManyWithoutTokenInputSchema";

export const TokenCreateInputSchema: z.ZodType<Prisma.TokenCreateInput> = z.object({
    id:        z.string().cuid().optional(),
    name:      z.string(),
    UserToken: z.lazy(() => UserTokenCreateNestedManyWithoutTokenInputSchema).optional(),
}).strict();

export default TokenCreateInputSchema;
