import {createStoreContext} from "@leight/context-client";
import {
    type ISortSchema,
    type ISortStoreProps
}                           from "@leight/sort";

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
