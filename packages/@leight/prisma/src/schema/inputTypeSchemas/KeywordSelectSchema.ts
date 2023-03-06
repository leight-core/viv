import {type Prisma} from "@prisma/client";
import {z}           from "zod";

export const KeywordSelectSchema: z.ZodType<Prisma.KeywordSelect> = z.object({
    id:   z.boolean().optional(),
    text: z.boolean().optional(),
}).strict();

export default KeywordSelectSchema;
