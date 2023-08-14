import {z} from "zod";

export const TagSchema = z.object({
    id:    z.string().nonempty({message: "Non-empty"}),
    code:  z.string().nonempty({message: "Non-empty"}),
    tag:   z.string().nonempty({message: "Non-empty"}),
    group: z.string().nonempty({message: "Non-empty"}),
    sort:  z.number().nullish(),
});
export type ITagSchema = typeof TagSchema;
export type ITag = z.infer<ITagSchema>;
