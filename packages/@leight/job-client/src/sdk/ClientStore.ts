/**
 Source code containing improved Zustand store stuff for Source support (client-side).
 */
import {createFilterContext} from "@leight/filter-client";
import {
    type IJobFilterSchema,
    type IJobSortSchema,
    type IJobSourceSchema,
    JobFilterSchema,
    JobSchema,
    JobSortSchema
}                            from "@leight/job";
import {createSortContext}   from "@leight/sort-client";
import {
    createSourceContext,
    type ISourceProps
}                            from "@leight/source-client";

export type IJobSource = ISourceProps<IJobSourceSchema>;

/**
 * Defines Store for Job, so you can access it's data.
 */
export const JobSourceStore                   = createSourceContext<IJobSourceSchema>({
    name:   "Job",
    schema: JobSchema,
});
/**
 * Defines Store for Job filtering entities.
 */
export const JobFilterStore                   = createFilterContext<IJobFilterSchema>({
    name:   "JobFilter",
    schema: JobFilterSchema,
});
/**
 * Defines Store for Job sorting data.
 */
export const JobSortStore                     = createSortContext<IJobSortSchema>({
    name:   "JobSort",
    schema: JobSortSchema,
});
/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_r9j07emhzzxldjhkfyp6okcs = true;
