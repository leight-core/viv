import {
    type ISourceName,
    type ISourceSchema
}                         from "@leight/source";
import {AbstractSource}   from "@leight/source-server";
import {type IRepository} from "../api";

export abstract class AbstractPrismaSource<TSourceSchema extends ISourceSchema, TRepository extends IRepository<TSourceSchema>> extends AbstractSource<TSourceSchema> {
    protected constructor(
        name: ISourceName,
        protected repository: TRepository,
    ) {
        super(name);
    }

    async runQuery(
        {
            cursor: {page, size: take} = {page: 0, size: 50},
            filter: where,
            sort:   orderBy,
        }: TSourceSchema["Query"] = {}): Promise<TSourceSchema["Entity"][]> {
        return this.repository.findMany({
            where,
            orderBy,
            skip: page * take,
            take,
        });
    }
}
