/**
 Base Prisma Source contains default implementation of Source for entity File connected to Prisma. This could be used for further extensions,
 also default export uses this as a parent class.
 */
import {
    $FileSource,
    type IFileOrderBy,
    type IFileSourceSchema,
    type IFileWhere,
    type IFileWhereUnique
}                       from "@leight/file";
import {
    $PrismaClient,
    type PrismaClient
}                       from "@leight/prisma";
import {withCursor}     from "@leight/query";
import {
    type ISource,
    withUpsert
}                       from "@leight/source";
import {AbstractSource} from "@leight/source-server";

export class FileBasePrismaSource extends AbstractSource<IFileSourceSchema> {
    static inject = [
        $PrismaClient,
    ];

    constructor(
        protected prismaClient: PrismaClient,
    ) {
        super($FileSource);
    }

    async runUpsert(props: ISource.IUpsert<IFileSourceSchema>): Promise<IFileSourceSchema["Entity"]> {
        return this.prisma().upsert(withUpsert(props));
    }

    async runCount(query?: IFileSourceSchema["Query"]): Promise<number> {
        return this.prisma().count({
            where: this.toWhere(query?.filter),
        });
    }

    async runQuery(query?: IFileSourceSchema["Query"]): Promise<IFileSourceSchema["Entity"][]> {
        return this.prisma().findMany(withCursor({
            query,
            arg: {
                where:   this.toWhere(query?.filter),
                orderBy: this.toOrderBy(query?.sort),
            }
        }));
    }

    prisma() {
        return this.prismaClient.file;
    }

    toWhere(filter?: IFileSourceSchema["Filter"]): IFileWhere | undefined {
        return undefined;
    }

    toWhereUnique(filter?: IFileSourceSchema["Filter"]): IFileWhereUnique | undefined {
        return undefined;
    }

    toOrderBy(sort?: IFileSourceSchema["Sort"]): IFileOrderBy | undefined {
        return sort as IFileOrderBy;
    }
}

/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_act7hdlilo0770g1mcrw8f0g = true;
