import type {Prisma}                                 from "@prisma/client";
import {z}                                           from "zod";
import {VerificationTokenCreateInputSchema}          from "../inputTypeSchemas/VerificationTokenCreateInputSchema";
import {VerificationTokenUncheckedCreateInputSchema} from "../inputTypeSchemas/VerificationTokenUncheckedCreateInputSchema";
import {VerificationTokenUncheckedUpdateInputSchema} from "../inputTypeSchemas/VerificationTokenUncheckedUpdateInputSchema";
import {VerificationTokenUpdateInputSchema}          from "../inputTypeSchemas/VerificationTokenUpdateInputSchema";
import {VerificationTokenWhereUniqueInputSchema}     from "../inputTypeSchemas/VerificationTokenWhereUniqueInputSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VerificationTokenSelectSchema: z.ZodType<Prisma.VerificationTokenSelect> = z.object({
    identifier: z.boolean().optional(),
    token:      z.boolean().optional(),
    expires:    z.boolean().optional(),
}).strict();

export const VerificationTokenUpsertArgsSchema: z.ZodType<Prisma.VerificationTokenUpsertArgs> = z.object({
    select: VerificationTokenSelectSchema.optional(),
    where:  VerificationTokenWhereUniqueInputSchema,
    create: z.union([
        VerificationTokenCreateInputSchema,
        VerificationTokenUncheckedCreateInputSchema
    ]),
    update: z.union([
        VerificationTokenUpdateInputSchema,
        VerificationTokenUncheckedUpdateInputSchema
    ]),
}).strict();

export default VerificationTokenUpsertArgsSchema;
