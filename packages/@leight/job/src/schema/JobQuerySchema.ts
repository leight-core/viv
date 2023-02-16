import {Schema}            from "@leight/prisma";
import {createQuerySchema} from "@leight/query";
import {z}                 from "zod";

export const JobQuerySchema = createQuerySchema({
    filter: Schema.JobWhereInputSchema,
    sort:   Schema.JobOrderByWithRelationInputSchema,
});

export type IJobQuery = z.infer<typeof JobQuerySchema>;
