import {Schema,}           from "@leight/prisma";
import {createQuerySchema} from "@leight/query";

export const FileQuerySchema = createQuerySchema({
    filter: Schema.FileWhereInputSchema,
    sort:   Schema.FileOrderByWithRelationInputSchema,
});
