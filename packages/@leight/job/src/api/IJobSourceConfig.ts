import {type IPrisma, type Job} from "@leight/prisma";
import {type ISourceConfig} from "@leight/source";

export interface IJobEntity extends Job {
}

export interface IJobSourceConfig extends ISourceConfig<
    IJobEntity,
    IPrisma.JobCreateInput,
    IPrisma.JobUpdateInput,
    IPrisma.JobWhereInput,
    IPrisma.JobOrderByWithRelationInput
> {
}
