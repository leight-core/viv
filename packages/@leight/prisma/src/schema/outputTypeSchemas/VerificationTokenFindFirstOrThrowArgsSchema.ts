import type {Prisma}                                     from "@prisma/client";
import {z}                                               from "zod";
import {VerificationTokenOrderByWithRelationInputSchema} from "../inputTypeSchemas/VerificationTokenOrderByWithRelationInputSchema";
import {VerificationTokenScalarFieldEnumSchema}          from "../inputTypeSchemas/VerificationTokenScalarFieldEnumSchema";
import {VerificationTokenWhereInputSchema}               from "../inputTypeSchemas/VerificationTokenWhereInputSchema";
import {VerificationTokenWhereUniqueInputSchema}         from "../inputTypeSchemas/VerificationTokenWhereUniqueInputSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VerificationTokenSelectSchema: z.ZodType<Prisma.VerificationTokenSelect> = z.object({
    identifier: z.boolean().optional(),
    token:      z.boolean().optional(),
    expires:    z.boolean().optional(),
}).strict();

export const VerificationTokenFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstOrThrowArgs> = z.object({
    select:   VerificationTokenSelectSchema.optional(),
    where:    VerificationTokenWhereInputSchema.optional(),
    orderBy:  z.union([
        VerificationTokenOrderByWithRelationInputSchema.array(),
        VerificationTokenOrderByWithRelationInputSchema
    ]).optional(),
    cursor:   VerificationTokenWhereUniqueInputSchema.optional(),
    take:     z.number().optional(),
    skip:     z.number().optional(),
    distinct: VerificationTokenScalarFieldEnumSchema.array().optional(),
}).strict();

export default VerificationTokenFindFirstOrThrowArgsSchema;
