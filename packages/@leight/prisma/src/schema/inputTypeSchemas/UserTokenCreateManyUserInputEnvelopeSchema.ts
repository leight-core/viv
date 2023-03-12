import type {Prisma}                        from "@prisma/client";
import {z}                                  from "zod";
import {UserTokenCreateManyUserInputSchema} from "./UserTokenCreateManyUserInputSchema";

export const UserTokenCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.UserTokenCreateManyUserInputEnvelope> = z.object({
    data:           z.union([
        z.lazy(() => UserTokenCreateManyUserInputSchema),
        z.lazy(() => UserTokenCreateManyUserInputSchema).array()
    ]),
    skipDuplicates: z.boolean().optional()
}).strict();

export default UserTokenCreateManyUserInputEnvelopeSchema;
