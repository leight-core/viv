import type {Prisma}                            from "@prisma/client";
import {z}                                      from "zod";
import {StringFieldUpdateOperationsInputSchema} from "./StringFieldUpdateOperationsInputSchema";

export const TokenUpdateManyMutationInputSchema: z.ZodType<Prisma.TokenUpdateManyMutationInput> = z.object({
    id:   z.union([
        z.string().cuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    name: z.union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
}).strict();

export default TokenUpdateManyMutationInputSchema;
