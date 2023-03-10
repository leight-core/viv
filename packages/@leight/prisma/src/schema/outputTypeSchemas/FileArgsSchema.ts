import type {Prisma}       from "@prisma/client";
import {z}                 from "zod";
import {FileIncludeSchema} from "../inputTypeSchemas/FileIncludeSchema";
import {FileSelectSchema}  from "../inputTypeSchemas/FileSelectSchema";

export const FileArgsSchema: z.ZodType<Prisma.FileArgs> = z.object({
    select:  z.lazy(() => FileSelectSchema).optional(),
    include: z.lazy(() => FileIncludeSchema).optional(),
}).strict();

export default FileArgsSchema;
