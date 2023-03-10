import {type ISourceSchema} from "@leight/source";

export interface IRepository<TSourceSchema extends ISourceSchema> {
    findMany(props: IRepository.FindMany<TSourceSchema>): Promise<TSourceSchema["Entity"][]>;
}

export namespace IRepository {
    export interface FindMany<TSourceConfig extends ISourceSchema> {
        where?: TSourceConfig["Filter"];
        orderBy?: TSourceConfig["Sort"];
        skip?: number;
        take?: number;
    }
}
