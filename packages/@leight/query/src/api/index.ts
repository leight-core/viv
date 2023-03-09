import {
    CursorSchema,
    type ICursor
}          from "@leight/cursor";
import {
    FilterSchema,
    IFilterSchema
}          from "@leight/filter";
import {
    ISortSchema,
    SortSchema
}          from "@leight/sort";
import {z} from "zod";

export const ParamsSchema = z.never();

export type IParamsSchema = typeof ParamsSchema;

export type IParams = z.infer<typeof ParamsSchema>;

/**
 * Common interface for making a query to something; it doesn't matter if there is a Repository or
 * whatever source you wish to use. Main purpose is an ability to send this structure over the wire.
 */
export interface IQuery<
    TFilter extends IFilterSchema = IFilterSchema,
    TSort extends ISortSchema = ISortSchema,
    TParams extends IParamsSchema = IParamsSchema,
> {
    readonly cursor?: ICursor;
    readonly filter?: TFilter;
    readonly sort?: TSort;
    readonly params?: TParams;
}

export const QuerySchema = <TFilter extends IFilterSchema, TSort extends ISortSchema, TParams extends IParamsSchema>({filter, sort, params}: Pick<IQuery, "filter" | "sort" | "params">) => z.object({
    filter: (filter || FilterSchema).optional(),
    sort:   (sort || SortSchema).optional(),
    params: (params || ParamsSchema).optional(),
    cursor: CursorSchema.optional(),
});
