import {
    type ITableColumn,
    Table
} from "@leight/table-client";

/**
 * Defined your column type
 */
export type IBetterTableColumn = ITableColumn<{
    /**
     * Each column must provide an ID
     */
    id: string;
    foo: string;
    number: number;
}>;

/**
 * Define columns you're working with; table will enforce you to specify all
 * columns by it's typings.
 *
 * That's because you can change or override columns if you wish.
 */
export type IBetterTableColumnKeys =
    "id"
    | "foo"
    | "number"

export const BetterTable = () => {
    return <Table<IBetterTableColumn, IBetterTableColumnKeys>
        columns={{
            /**
             * See type in the IDE to reveal it's mysteries
             */
            id: {
                /**
                 * When you provide title, it goes through the translation, but
                 * if not found, just the title is returned (in this cas column name
                 * will be just ID)
                 *
                 * The Drawback is that you won't see the whole i18n sentence you have to add
                 * to translations.
                 */
                title:  "ID",
                render: "id",
            },
            /**
             * When you want to render the same value as it's input object,
             * just provide the property name (typed).
             *
             * This structure is enforced, because if you change your mind later
             * on and put some other properties (like width), it's much simpler to
             * do so.
             */
            number: {
                width:  10,
                render: () => "nope",
            },
            foo:    {
                width: 120,
                /**
                 * Yaay! You can provide custom render method. Input is your `TItem`.
                 */
                render: ({foo}) => {
                    return <>extended {foo}</>;
                },
            },
        }}
        order={[
            "number",
            "id",
            "foo"
        ]}
        overrideColumns={{
            number: {
                render: ({number}) => number * 2,
            },
        }}
        /**
         * Items you wish to render; this is the simplest example
         */
        items={[
            {id: "1", foo: "foo1", number: 1},
            {id: "2", foo: "foo2", number: 2},
            {id: "42", foo: "foo42", number: 42},
        ]}
    />;
};
