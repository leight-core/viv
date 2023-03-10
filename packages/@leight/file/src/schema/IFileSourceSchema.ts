import {Schema}             from "@leight/prisma";
import {type ISourceSchema} from "@leight/source";
import {type z}             from "zod";
import {type IFileSchema}   from "./FileSchema";

export interface IFileSourceSchema extends ISourceSchema<
    IFileSchema,
    typeof Schema.FileOptionalDefaultsSchema,
    typeof Schema.FilePartialSchema,
    z.infer<typeof Schema.FileWhereInputSchema>,
    z.infer<typeof Schema.FileWhereUniqueInputSchema>,
    z.infer<typeof Schema.FileOrderByWithRelationInputSchema>
> {
}
