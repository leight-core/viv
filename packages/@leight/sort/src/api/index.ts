import {type IUseState} from "@leight/context";
import {z}              from "zod";

export type ISortOrder =
    "asc"
    | "desc";
export const SortSchema = z.record(z.enum([
    "asc",
    "desc"
]));
export type ISortSchema = typeof SortSchema;
export type ISort = z.infer<ISortSchema>;

export interface ISortStoreProps<TSortSchema extends ISortSchema> {
    readonly schema: TSortSchema;
    readonly sort: z.infer<TSortSchema>;

    setSort(sort: keyof z.infer<TSortSchema>, order: ISortOrder): void;
}

export type IUseSortState<TSortSchema extends ISortSchema> = IUseState<ISortStoreProps<TSortSchema>>;
