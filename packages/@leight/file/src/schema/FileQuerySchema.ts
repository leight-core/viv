import {
    FileOrderByWithRelationInputSchema,
    FileWhereInputSchema
}                          from "@leight/prisma";
import {createQuerySchema} from "@leight/query";

export const FileQuerySchema = createQuerySchema({
    filter: FileWhereInputSchema,
    sort:   FileOrderByWithRelationInputSchema,
});
