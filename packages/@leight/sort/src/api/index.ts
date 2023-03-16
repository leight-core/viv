import {type IUseState} from "@leight/context";
import {z}              from "zod";

export const SortSchema = z.object({});
export type ISortSchema = typeof SortSchema;
export type ISort = z.infer<ISortSchema>;

export interface ISortStoreProps<TSortSchema extends ISortSchema> {
    readonly schema: TSortSchema;
    readonly sort: z.infer<TSortSchema>;
}

export type IUseSortState<TSortSchema extends ISortSchema> = IUseState<ISortStoreProps<TSortSchema>>;
