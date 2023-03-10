import {type ISourceSchema} from "@leight/source";

export interface IRepository<TSourceSchema extends ISourceSchema> {
    create(props: IRepository.Create<TSourceSchema>): Promise<TSourceSchema["Entity"]>;

    findMany(props: IRepository.FindMany<TSourceSchema>): Promise<TSourceSchema["Entity"][]>;

    findUniqueOrThrow(props: IRepository.FindUniqueOrThrow<TSourceSchema>): Promise<TSourceSchema["Entity"]>;
}

export namespace IRepository {
    export interface Create<TSourceSchema extends ISourceSchema> {
        data: TSourceSchema["Entity"];
    }

    export interface FindMany<TSourceSchema extends ISourceSchema> {
        where?: TSourceSchema["Where"];
        orderBy?: TSourceSchema["OrderBy"];
        skip?: number;
        take?: number;
    }

    export interface FindUniqueOrThrow<TSourceSchema extends ISourceSchema> {
        where: TSourceSchema["WhereUnique"];
    }
}
