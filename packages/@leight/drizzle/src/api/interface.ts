import {type NodePgDatabase} from "drizzle-orm/node-postgres";
import {id}                  from "../column";
import {withTable}           from "../withTable";

export type IDrizzle = NodePgDatabase;

const Table = withTable("table", {
    id: id(),
});

export type ITable = typeof Table;

// export type ITable<T extends TableConfig> = PgTableWithColumns<T>;
