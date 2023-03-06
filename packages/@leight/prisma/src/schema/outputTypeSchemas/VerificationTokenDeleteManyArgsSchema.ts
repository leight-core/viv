import type {Prisma}                       from "@prisma/client";
import {z}                                 from "zod";
import {VerificationTokenWhereInputSchema} from "../inputTypeSchemas/VerificationTokenWhereInputSchema";

export const VerificationTokenDeleteManyArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteManyArgs> = z.object({
    where: VerificationTokenWhereInputSchema.optional(),
}).strict();

export default VerificationTokenDeleteManyArgsSchema;
