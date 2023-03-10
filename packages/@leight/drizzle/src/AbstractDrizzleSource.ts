import {type ISourceSchema} from "@leight/source";
import {AbstractSource}     from "@leight/source-server";
import {eq}                 from "drizzle-orm/expressions";
import {getTableName}       from "drizzle-orm/table";
import {
    type IDrizzle,
    type ITable
}                           from "./api";

export class AbstractDrizzleSource<TSourceSchema extends ISourceSchema<any>> extends AbstractSource<TSourceSchema> {
    protected constructor(
        protected table: ITable,
        protected drizzle: IDrizzle,
    ) {
        super(getTableName(table));
    }

    async runFind(id: string): Promise<TSourceSchema["Entity"][]> {
        return this.drizzle.select().from(this.table).where(eq(this.table.id, id));
    }
}
