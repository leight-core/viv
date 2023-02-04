import {type IPrisma, type Job} from "@leight/prisma";
import {type ISourceConfig} from "@leight/source";

export interface IJobSourceConfig extends ISourceConfig<
    Job,
    IPrisma.JobCreateInput,
    IPrisma.JobUpdateInput,
    IPrisma.JobWhereInput,
    IPrisma.JobOrderByWithRelationInput
> {
}
