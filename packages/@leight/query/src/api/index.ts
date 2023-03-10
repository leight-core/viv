import {CursorSchema} from "@leight/cursor";
import {FilterSchema} from "@leight/filter";
import {SortSchema}   from "@leight/sort";
import {z}            from "zod";

export const ParamsSchema = z.object({});

export type IParamsSchema = typeof ParamsSchema;

export type IParams = z.infer<IParamsSchema>;

export const QuerySchema = z.object({
    filter: FilterSchema.optional(),
    sort:   SortSchema.optional(),
    cursor: CursorSchema.optional(),
    params: ParamsSchema.optional(),
});

export type IQuerySchema = typeof QuerySchema;

export type IQuery = z.infer<IQuerySchema>;
