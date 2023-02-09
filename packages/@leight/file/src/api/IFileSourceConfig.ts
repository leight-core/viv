import {
    type File,
    type IPrisma
}                           from "@leight/prisma";
import {type ISourceConfig} from "@leight/source";

export interface IFileSourceConfig extends ISourceConfig<
    File,
    IPrisma.FileCreateInput,
    IPrisma.FileUpdateInput,
    IPrisma.FileWhereInput,
    IPrisma.FileOrderByWithRelationInput
> {
}
