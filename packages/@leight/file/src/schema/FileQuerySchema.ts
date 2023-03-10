import {QuerySchema} from "@leight/query";
import {z}           from "zod";

export const FileQuerySchema = QuerySchema({
    filter: z.object({
        fulltext: z.string().nullish(),
    }),
    sort:   z.object({}),
});
