import {createQuerySchema} from "@leight/query";
import {z}                 from "zod";

export const FileQuerySchema = createQuerySchema({
    filter: z.object({
        fulltext: z.string().nullish(),
    }),
    sort:   z.object({}),
});
