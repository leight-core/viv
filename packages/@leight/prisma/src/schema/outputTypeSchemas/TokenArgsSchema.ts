import type {Prisma}        from "@prisma/client";
import {z}                  from "zod";
import {TokenIncludeSchema} from "../inputTypeSchemas/TokenIncludeSchema";
import {TokenSelectSchema}  from "../inputTypeSchemas/TokenSelectSchema";

export const TokenArgsSchema: z.ZodType<Prisma.TokenArgs> = z.object({
    select:  z.lazy(() => TokenSelectSchema).optional(),
    include: z.lazy(() => TokenIncludeSchema).optional(),
}).strict();

export default TokenArgsSchema;
