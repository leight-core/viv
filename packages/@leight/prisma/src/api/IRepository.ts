import {type ISourceSchema} from "@leight/source";

export interface IRepository<TSourceConfig extends ISourceSchema> {
    findMany(props: IRepository.FindMany<TSourceConfig>): Promise<TSourceConfig["Entity"][]>;
}

export namespace IRepository {
    export interface FindMany<TSourceConfig extends ISourceSchema> {
        where?: TSourceConfig["Filter"];
        orderBy?: TSourceConfig["Sort"];
        skip?: number;
        take?: number;
    }
}
