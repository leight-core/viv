import {
    type IPrisma,
    Schema
}                           from "@leight/prisma";
import {type ISourceConfig} from "@leight/source";

export interface IJobSourceConfig extends ISourceConfig<
    Schema.Job,
    IPrisma.JobCreateInput,
    IPrisma.JobUpdateInput,
    IPrisma.JobWhereInput,
    IPrisma.JobOrderByWithRelationInput
> {
}
