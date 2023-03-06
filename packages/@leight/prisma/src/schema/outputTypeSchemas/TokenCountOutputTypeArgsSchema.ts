import {type Prisma}                      from "@prisma/client";
import {z}                                from "zod";
import {TokenCountOutputTypeSelectSchema} from "./TokenCountOutputTypeSelectSchema";

export const TokenCountOutputTypeArgsSchema: z.ZodType<Prisma.TokenCountOutputTypeArgs> = z.object({
    select: z.lazy(() => TokenCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TokenCountOutputTypeSelectSchema;
