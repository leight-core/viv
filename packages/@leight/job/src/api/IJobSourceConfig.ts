import {
    type IPrisma,
    Schema
}                           from "@leight/prisma";
import {type ISourceSchema} from "@leight/source";

export interface IJobSourceConfig extends ISourceSchema<
    Schema.Job,
    IPrisma.JobCreateInput,
    IPrisma.JobUpdateInput,
    IPrisma.JobWhereInput,
    IPrisma.JobOrderByWithRelationInput
> {
}
