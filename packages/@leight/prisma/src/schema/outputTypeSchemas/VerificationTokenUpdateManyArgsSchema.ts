import type {Prisma}                                     from "@prisma/client";
import {z}                                               from "zod";
import {VerificationTokenUncheckedUpdateManyInputSchema} from "../inputTypeSchemas/VerificationTokenUncheckedUpdateManyInputSchema";
import {VerificationTokenUpdateManyMutationInputSchema}  from "../inputTypeSchemas/VerificationTokenUpdateManyMutationInputSchema";
import {VerificationTokenWhereInputSchema}               from "../inputTypeSchemas/VerificationTokenWhereInputSchema";

export const VerificationTokenUpdateManyArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateManyArgs> = z.object({
    data:  z.union([
        VerificationTokenUpdateManyMutationInputSchema,
        VerificationTokenUncheckedUpdateManyInputSchema
    ]),
    where: VerificationTokenWhereInputSchema.optional(),
}).strict();

export default VerificationTokenUpdateManyArgsSchema;
