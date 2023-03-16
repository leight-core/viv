import {createStoreContext} from "@leight/context-client";
import {type ISortSchema}   from "@leight/sort";
import {z}                  from "zod";

export interface ISortStoreProps<TSortSchema extends ISortSchema> {
    readonly schema: TSortSchema;
    readonly sort: z.infer<TSortSchema>;
}

export interface ICreateSortContextProps<TSortSchema extends ISortSchema> {
    readonly name: string;
    readonly schema: TSortSchema;
}

export const createSortContext = <TSortSchema extends ISortSchema>(
    {
        name,
        schema,
    }: ICreateSortContextProps<TSortSchema>) => {
    return createStoreContext<ISortStoreProps<TSortSchema>>(
        (set) => ({
            schema,
            sort: {},
        }),
        `[${name}] SortContext`,
        `Add [${name}] SortProvider`,
    );
};
