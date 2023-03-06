import type {Prisma}             from "@prisma/client";
import {z}                       from "zod";
import {SessionWhereInputSchema} from "../inputTypeSchemas/SessionWhereInputSchema";

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> = z.object({
    where: SessionWhereInputSchema.optional(),
}).strict();

export default SessionDeleteManyArgsSchema;
