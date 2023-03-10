import {
    type IPrisma,
    type Prisma
}                           from "@leight/prisma";
import {type ISourceSchema} from "@leight/source";

export interface IFileSourceConfig extends ISourceSchema<
    Prisma.File,
    IPrisma.FileCreateInput,
    IPrisma.FileUpdateInput,
    IPrisma.FileWhereInput,
    IPrisma.FileOrderByWithRelationInput
> {
}
