// Generated file
import {type IUseQuery} from "@leight/react-query";
import {
    type ISource,
    type ISourceSchema,
    type IWithIdentity
}                       from "@leight/source";
import {
    type IJobCreateSchema,
    type IJobFilterSchema,
    type IJobParamSchema,
    type IJobPatchSchema,
    type IJobSchema,
    type IJobSortSchema
}                       from "./entity-schema";

export type IUseJobFetchQuery = IUseQuery<IJobSourceSchema["Query"], IJobSourceSchema["Entity"]>;
export type IUseJobFindQuery = IUseQuery<IWithIdentity, IJobSourceSchema["Entity"]>;

export interface IJobSource extends ISource<IJobSourceSchema> {
}

export interface IJobSourceSchema extends ISourceSchema<
    IJobSchema,
    IJobCreateSchema,
    IJobPatchSchema,
    IJobFilterSchema,
    IJobSortSchema,
    IJobParamSchema
> {
}

export const $JobSource = Symbol.for("@leight/job/IJobSource");
