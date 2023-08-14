import {z} from "@leight/utils";

/**
 * Base definition of filter schema which should all the Sources implement.
 */
export const FilterSchema = z.object({
    /**
     * Basically any entity should have an ID, thus it's present in the default schema
     */
    id: z.string().optional(),
    /**
     * Usually it's somehow possible to search for the Entity by some text, thus it's present,
     * but not necessarily required
     */
    fulltext: z.string().optional(),
});
/**
 * Base type for schema providing filters.
 */
export type IFilterSchema = typeof FilterSchema;
export type IFilter = z.infer<IFilterSchema>;
