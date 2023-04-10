import {z}                from "zod";
import {type IStoreProps} from "../../@zustand";
import {type IUseState}   from "../../context";

export const SortOrderSchema = z.enum([
    "asc",
    "desc"
]).optional();
export type ISortOrderSchema = typeof SortOrderSchema
export type ISortOrder = z.infer<ISortOrderSchema>;
export const SortSchema = z.object({});
export type ISortSchema = typeof SortSchema;
export type ISort = z.infer<ISortSchema>;

export type ISortStoreProps<TSortSchema extends ISortSchema> = IStoreProps<{
    readonly schema: TSortSchema;
    readonly sort: z.infer<TSortSchema>;

    setSort(sort: keyof z.infer<TSortSchema>, order: ISortOrder): void;
}>

export type IUseSortState<TSortSchema extends ISortSchema> = IUseState<ISortStoreProps<TSortSchema>>;
