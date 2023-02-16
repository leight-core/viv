import {
    type IPrisma,
    type Prisma
}                           from "@leight/prisma";
import {type ISourceConfig} from "@leight/source";

export interface IFileSourceConfig extends ISourceConfig<
    Prisma.File,
    IPrisma.FileCreateInput,
    IPrisma.FileUpdateInput,
    IPrisma.FileWhereInput,
    IPrisma.FileOrderByWithRelationInput
> {
}
