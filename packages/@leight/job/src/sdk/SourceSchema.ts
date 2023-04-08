/**
 Source code of the common stuff for Job which could be shared between server and client side.
 */
import {type IUseQuery} from "@leight/react-query";
import {
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
}                       from "./PrismaSchema";

export type IUseJobQuery = IUseQuery<IJobSourceSchema["Query"] | undefined, IJobSourceSchema["Entity"][]>;
export type IUseJobCountQuery = IUseQuery<IJobSourceSchema["Query"] | undefined, number>;
export type IUseJobFetchQuery = IUseQuery<IJobSourceSchema["Query"], IJobSourceSchema["Entity"]>;
export type IUseJobFindQuery = IUseQuery<IWithIdentity, IJobSourceSchema["Entity"]>;

export interface IJobSourceSchema extends ISourceSchema<
    IJobSchema,
    IJobCreateSchema,
    IJobPatchSchema,
    IJobFilterSchema,
    IJobSortSchema,
    IJobParamSchema
> {
}

/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_pqtxrfbv9oxoedq0sk2mxng8 = true;
