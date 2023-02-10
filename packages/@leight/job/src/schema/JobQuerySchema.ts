import {
    JobOrderByWithRelationInputSchema,
    JobWhereInputSchema
}                          from "@leight/prisma";
import {createQuerySchema} from "@leight/query";
import {z}                 from "zod";

export const JobQuerySchema = createQuerySchema({
    filter: JobWhereInputSchema,
    sort:   JobOrderByWithRelationInputSchema,
});

export type IJobQuery = z.infer<typeof JobQuerySchema>;
