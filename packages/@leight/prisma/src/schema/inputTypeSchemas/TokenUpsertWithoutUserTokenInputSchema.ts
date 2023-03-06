import type {Prisma}                                     from "@prisma/client";
import {z}                                               from "zod";
import {TokenCreateWithoutUserTokenInputSchema}          from "./TokenCreateWithoutUserTokenInputSchema";
import {TokenUncheckedCreateWithoutUserTokenInputSchema} from "./TokenUncheckedCreateWithoutUserTokenInputSchema";
import {TokenUncheckedUpdateWithoutUserTokenInputSchema} from "./TokenUncheckedUpdateWithoutUserTokenInputSchema";
import {TokenUpdateWithoutUserTokenInputSchema}          from "./TokenUpdateWithoutUserTokenInputSchema";

export const TokenUpsertWithoutUserTokenInputSchema: z.ZodType<Prisma.TokenUpsertWithoutUserTokenInput> = z.object({
    update: z.union([
        z.lazy(() => TokenUpdateWithoutUserTokenInputSchema),
        z.lazy(() => TokenUncheckedUpdateWithoutUserTokenInputSchema)
    ]),
    create: z.union([
        z.lazy(() => TokenCreateWithoutUserTokenInputSchema),
        z.lazy(() => TokenUncheckedCreateWithoutUserTokenInputSchema)
    ]),
}).strict();

export default TokenUpsertWithoutUserTokenInputSchema;
