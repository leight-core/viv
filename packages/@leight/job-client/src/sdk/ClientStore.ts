/**
 Source code containing improved Zustand store stuff for Source support (client-side).
 */
import {
    type IJobSortSchema,
    type IJobSourceSchema,
    JobSchema,
    JobSortSchema
}                          from "@leight/job";
import {createSortContext} from "@leight/sort-client";
import {
    createSourceContext,
    type ISourceProps
}                          from "@leight/source-client";

export type IJobSource = ISourceProps<IJobSourceSchema>;

const StoreSourceContext             = createSourceContext<IJobSourceSchema>({
    name:   "Job",
    schema: JobSchema,
});
const StoreSortContext               = createSortContext<IJobSortSchema>({
    name:   "JobSort",
    schema: JobSortSchema,
});
export const JobProvider             = StoreSourceContext.Provider;
export const useJobSource            = StoreSourceContext.useState;
export const useOptionalJobSource    = StoreSourceContext.useOptionalState;
export const useJobStore             = StoreSourceContext.useStore;
export const useOptionalJobStore     = StoreSourceContext.useOptionalStore;
export const JobSortProvider         = StoreSortContext.Provider;
export const useJobSort              = StoreSortContext.useState;
export const useOptionalJobSort      = StoreSortContext.useOptionalState;
export const useJobSortStore         = StoreSortContext.useStore;
export const useOptionalJobSortStore = StoreSortContext.useOptionalStore;
