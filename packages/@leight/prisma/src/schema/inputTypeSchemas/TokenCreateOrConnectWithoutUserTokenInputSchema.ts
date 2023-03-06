import type {Prisma}                                     from "@prisma/client";
import {z}                                               from "zod";
import {TokenCreateWithoutUserTokenInputSchema}          from "./TokenCreateWithoutUserTokenInputSchema";
import {TokenUncheckedCreateWithoutUserTokenInputSchema} from "./TokenUncheckedCreateWithoutUserTokenInputSchema";
import {TokenWhereUniqueInputSchema}                     from "./TokenWhereUniqueInputSchema";

export const TokenCreateOrConnectWithoutUserTokenInputSchema: z.ZodType<Prisma.TokenCreateOrConnectWithoutUserTokenInput> = z.object({
    where:  z.lazy(() => TokenWhereUniqueInputSchema),
    create: z.union([
        z.lazy(() => TokenCreateWithoutUserTokenInputSchema),
        z.lazy(() => TokenUncheckedCreateWithoutUserTokenInputSchema)
    ]),
}).strict();

export default TokenCreateOrConnectWithoutUserTokenInputSchema;
