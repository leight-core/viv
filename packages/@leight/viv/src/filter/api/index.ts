import {z}                from "zod";
import {type IStoreProps} from "../../@zustand";
import {type IUseState}   from "../../context";

export const FilterSchema = z.object({
    id:       z.string().optional(),
    fulltext: z.string().optional(),
});
export type IFilterSchema =
    typeof FilterSchema
    | z.ZodType;
export type IFilter = z.infer<IFilterSchema>;

export type IFilterStoreProps<TFilterSchema extends IFilterSchema> = IStoreProps<{
    readonly schema: TFilterSchema;
    readonly filter: z.infer<TFilterSchema>;

    setFilter(filter?: z.infer<TFilterSchema>): void;
}>

export type IUseFilterState<TFilterSchema extends IFilterSchema> = IUseState<IFilterStoreProps<TFilterSchema>>;
