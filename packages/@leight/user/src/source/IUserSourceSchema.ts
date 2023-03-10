import {Schema}             from "@leight/prisma";
import {type ISourceSchema} from "@leight/source";
import {z}                  from "zod";
import {type IUserSchema}   from "../schema";

export interface IUserSourceSchema extends ISourceSchema<
    IUserSchema,
    typeof Schema.UserOptionalDefaultsSchema,
    typeof Schema.UserPartialSchema,
    z.infer<typeof Schema.UserWhereInputSchema>,
    z.infer<typeof Schema.UserWhereUniqueInputSchema>,
    z.infer<typeof Schema.UserOrderByWithRelationInputSchema>
> {
}
