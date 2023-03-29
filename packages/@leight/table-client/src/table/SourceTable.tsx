import {Pagination}         from "@leight/cursor-client";
import {Paper}              from "@leight/mantine";
import {type IUseSortState} from "@leight/sort";
import {SortIcon}           from "@leight/sort-client";
import {
    type ISourceSchema,
    type IUseSourceState
}                           from "@leight/source";
import {chain}              from "@leight/utils";
import {
    Center,
    Divider
}                           from "@mantine/core";
import {
    type ITableColumn,
    type ITableProps,
    Table
}                           from "./Table";

export interface ISourceTableColumn<TSourceSchema extends ISourceSchema> extends ITableColumn<TSourceSchema["Entity"]> {
    readonly sort?: keyof TSourceSchema["Sort"];
}

export interface ISourceTableInternalProps<
    TSourceSchema extends ISourceSchema,
    TColumnKeys extends string,
> extends ITableProps<ISourceTableColumn<TSourceSchema>, TColumnKeys> {
    /**
     * Table schema used to infer all internal types.
     */
    readonly schema: TSourceSchema["EntitySchema"];
    readonly useSource: IUseSourceState<TSourceSchema>;
    readonly useSort: IUseSortState<TSourceSchema["SortSchema"]>;
}

/**
 * Public props which any component could extend from (non-partial).
 */
export type ISourceTableProps<
    TSourceSchema extends ISourceSchema,
    TColumnKeys extends string,
> = Omit<ISourceTableInternalProps<TSourceSchema, TColumnKeys>, "schema" | "useSource" | "useSort" | "columns" | "withTranslation">;

export const SourceTable = <
    TSourceSchema extends ISourceSchema,
    TColumnKeys extends string,
>(
    {
        schema,
        useSource,
        useSort,
        columns,
        ...props
    }: ISourceTableInternalProps<TSourceSchema, TColumnKeys>) => {
    const {
              entities,
              isFetching,
              isLoading,
          }               = useSource((
        {
            entities,
            isFetching,
            isLoading,
        }) => (
        {
            entities,
            isFetching,
            isLoading,
        }));
    const {sort, setSort} = useSort(({sort, setSort}) => ({sort, setSort}));

    return <Paper>
        <Center>
            <Pagination/>
        </Center>
        <Divider m={"md"}/>
        <Table<ISourceTableColumn<TSourceSchema>, TColumnKeys>
            isLoading={isLoading || isFetching}
            columns={Object.entries<ISourceTableColumn<TSourceSchema>>(columns).reduce<any>((prev, [name, column]) => {
                return {
                    ...prev,
                    [name]: {
                        ...column,
                        headerStyle:   column.headerStyle || (defaultStyle => ({
                            ...defaultStyle,
                            cursor: column.sort ? "pointer" : undefined,
                        })),
                        onHeaderClick: column.onHeaderClick || (() => {
                            column.sort && setSort(column.sort, chain(sort[column.sort], [
                                "asc",
                                "desc",
                                undefined,
                            ]));
                        }),
                        headerRender:  column.headerRender || ((children) => {
                            return <>
                                {column.sort ? <SortIcon<TSourceSchema["Sort"]> sort={sort} index={column.sort}/> : null}
                                {children}
                            </>;
                        }),
                    },
                };
            }, {})}
            items={entities.filter(entity => schema.safeParse(entity).success)}
            {...props}
        />
        <Divider m={"md"}/>
        <Center>
            <Pagination/>
        </Center>
    </Paper>;
};
