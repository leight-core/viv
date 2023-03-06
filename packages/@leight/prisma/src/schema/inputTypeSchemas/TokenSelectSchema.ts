import {type Prisma}                    from "@prisma/client";
import {z}                              from "zod";
import {TokenCountOutputTypeArgsSchema} from "../outputTypeSchemas/TokenCountOutputTypeArgsSchema";
import {UserTokenFindManyArgsSchema}    from "../outputTypeSchemas/UserTokenFindManyArgsSchema";

export const TokenSelectSchema: z.ZodType<Prisma.TokenSelect> = z.object({
    id:        z.boolean().optional(),
    name:      z.boolean().optional(),
    UserToken: z.union([
        z.boolean(),
        z.lazy(() => UserTokenFindManyArgsSchema)
    ]).optional(),
    _count:    z.union([
        z.boolean(),
        z.lazy(() => TokenCountOutputTypeArgsSchema)
    ]).optional(),
}).strict();

export default TokenSelectSchema;