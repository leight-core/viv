import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const VerificationTokenSelectSchema: z.ZodType<Prisma.VerificationTokenSelect> = z.object({
    identifier: z.boolean().optional(),
    token:      z.boolean().optional(),
    expires:    z.boolean().optional(),
}).strict();

export default VerificationTokenSelectSchema;
