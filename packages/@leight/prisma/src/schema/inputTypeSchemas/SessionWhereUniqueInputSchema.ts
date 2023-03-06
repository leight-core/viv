import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = z.object({
    id:           z.string().cuid().optional(),
    sessionToken: z.string().optional(),
}).strict();

export default SessionWhereUniqueInputSchema;
