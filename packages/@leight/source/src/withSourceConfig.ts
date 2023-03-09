import {type ITable}        from "@leight/drizzle";
import {z}                  from "zod";
import {type ISourceConfig} from "./api";

export interface IWithSourceConfigProps<
    TSchema extends ITable<any>,
    TQuery extends z.ZodObject<any>,
> {
    Schema: TSchema;
    Query: TQuery;
}

export const withSourceConfig = <
    TSchema extends ITable<any>,
    TQuery extends z.ZodObject<any>,
>({Schema, Query}: IWithSourceConfigProps<TSchema, TQuery>): ISourceConfig<
    TSchema,
    TQuery
> => {
    return {
        Schema,
        Query,
        // Create: withInsertSchema(Schema),
    };
};
