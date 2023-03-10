import type {Prisma} from "@prisma/client";
import {z}           from "zod";

export const TokenCountOutputTypeSelectSchema: z.ZodType<Prisma.TokenCountOutputTypeSelect> = z.object({
    UserToken: z.boolean().optional(),
}).strict();

export default TokenCountOutputTypeSelectSchema;
