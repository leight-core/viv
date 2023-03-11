import {PrismaSchema} from "@leight/prisma";
import {
    type ISourceSchema,
    WithIdentitySchema
}                     from "@leight/source";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// noinspection ES6UnusedImports
import * as _         from "@prisma/client";
import {z}            from "zod";

export const JobStatusSchema = PrismaSchema.JobStatusSchema;
export type IJobStatusSchema = typeof JobStatusSchema;
export type IJobStatus = z.infer<IJobStatusSchema>;

export const JobSchema = PrismaSchema.JobSchema;
export type IJobSchema = typeof JobSchema;
export type IJob = z.infer<IJobSchema>;

export const JobCreateSchema = PrismaSchema.JobOptionalDefaultsSchema;
export type IJobCreateSchema = typeof JobCreateSchema;
export type IJobCreate = z.infer<IJobCreateSchema>;

export const JobPatchSchema = PrismaSchema.JobPartialSchema.merge(WithIdentitySchema);
export type IJobPatchSchema = typeof JobPatchSchema;
export type IJobPatch = z.infer<IJobPatchSchema>;

export interface IJobSourceSchema extends ISourceSchema<
    IJobSchema,
    IJobCreateSchema,
    IJobPatchSchema
> {
}
