import type {Prisma}                            from "@prisma/client";
import {z}                                      from "zod";
import {StringFieldUpdateOperationsInputSchema} from "./StringFieldUpdateOperationsInputSchema";

export const KeywordUncheckedUpdateManyInputSchema: z.ZodType<Prisma.KeywordUncheckedUpdateManyInput> = z.object({
    id:   z.union([
        z.string().cuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    text: z.union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
}).strict();

export default KeywordUncheckedUpdateManyInputSchema;