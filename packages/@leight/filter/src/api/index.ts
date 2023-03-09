import {z} from "zod";

export const FilterSchema = z.object({
    fulltext: z.string().optional(),
});

export type IFilterSchema = typeof FilterSchema;

export type IFilter = z.infer<typeof FilterSchema>;

export const WithIdentitySchema = z.object({
    id: z.string().cuid2(),
});

export type IWithIdentity = z.infer<typeof WithIdentitySchema>;
