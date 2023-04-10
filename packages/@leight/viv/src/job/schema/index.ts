import {z}               from "zod";
import {JobStatusSchema} from "../../@prisma";

export {JobStatusSchema} from "../../@prisma";
export type IJobStatusSchema = typeof JobStatusSchema;
export type IJobStatus = z.infer<IJobStatusSchema>;

export const JobDoneStatus: IJobStatus[] = [
    "DONE",
    "FAILURE",
    "REVIEW",
    "SUCCESS"
];

export const JobSchemaOverride = z.object({
    params: z.any().optional(),
});
