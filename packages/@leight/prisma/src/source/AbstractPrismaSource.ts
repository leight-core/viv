import {
    type ISourceConfig,
    type ISourceName
}                         from "@leight/source";
import {AbstractSource}   from "@leight/source-server";
import {type IRepository} from "../api";

export abstract class AbstractPrismaSource<TSourceConfig extends ISourceConfig, TRepository extends IRepository<TSourceConfig>> extends AbstractSource<TSourceConfig> {
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
        }: TSourceConfig["Query"] = {}): Promise<TSourceConfig["Entity"][]> {
        return this.repository.findMany({
            where,
            orderBy,
            skip: page * take,
            take,
        });
    }
}
