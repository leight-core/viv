import {type ISourceConfig} from "@leight/source";

export interface IRepository<TSourceConfig extends ISourceConfig> {
    findMany(props: IRepository.FindMany<TSourceConfig>): Promise<TSourceConfig['Entity'][]>;
}

export namespace IRepository {
    export interface FindMany<TSourceConfig extends ISourceConfig> {
        where?: TSourceConfig['Filter'];
        orderBy?: TSourceConfig['Sort'];
        skip?: number;
        take?: number;
    }
}
