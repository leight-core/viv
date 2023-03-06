import type {Prisma}                                      from "@prisma/client";
import {z}                                                from "zod";
import {JobUpdateOneRequiredWithoutLogsNestedInputSchema} from "./JobUpdateOneRequiredWithoutLogsNestedInputSchema";
import {StringFieldUpdateOperationsInputSchema}           from "./StringFieldUpdateOperationsInputSchema";

export const JobLogUpdateInputSchema: z.ZodType<Prisma.JobLogUpdateInput> = z.object({
    id:      z.union([
        z.string().cuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    message: z.union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
    ]).optional(),
    job:     z.lazy(() => JobUpdateOneRequiredWithoutLogsNestedInputSchema).optional(),
}).strict();

export default JobLogUpdateInputSchema;
