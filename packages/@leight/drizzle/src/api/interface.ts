import {type NodePgDatabase}     from "drizzle-orm/node-postgres";
import {type PgTableWithColumns} from "drizzle-orm/pg-core";
import {type TableConfig}        from "drizzle-orm/pg-core/table";

export type IDrizzle = NodePgDatabase;

export type ITable<T extends TableConfig> = PgTableWithColumns<T>;
