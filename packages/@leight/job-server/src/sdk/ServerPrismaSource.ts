/**
 Base Prisma Source contains default implementation of Source for entity Job connected to Prisma. This could be used for further extensions,
 also default export uses this as a parent class.
 */
import {
    $JobSource,
    type IJobOrderBy,
    type IJobSourceSchema,
    type IJobWhere,
    type IJobWhereUnique
}                       from "@leight/job";
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

export class JobBasePrismaSource extends AbstractSource<IJobSourceSchema> {
    static inject = [
        $PrismaClient,
    ];

    constructor(
        protected prismaClient: PrismaClient,
    ) {
        super($JobSource);
    }

    async runUpsert(props: ISource.IUpsert<IJobSourceSchema>): Promise<IJobSourceSchema["Entity"]> {
        return this.prisma().upsert(withUpsert(props));
    }

    async runCount(query?: IJobSourceSchema["Query"]): Promise<number> {
        return this.prisma().count({
            where: this.toWhere(query?.filter),
        });
    }

    async runQuery(query?: IJobSourceSchema["Query"]): Promise<IJobSourceSchema["Entity"][]> {
        return this.prisma().findMany(withCursor({
            query,
            arg: {
                where:   this.toWhere(query?.filter),
                orderBy: this.toOrderBy(query?.sort),
            }
        }));
    }

    prisma() {
        return this.prismaClient.job;
    }

    toWhere(filter?: IJobSourceSchema["Filter"]): IJobWhere | undefined {
        return undefined;
    }

    toWhereUnique(filter?: IJobSourceSchema["Filter"]): IJobWhereUnique | undefined {
        return undefined;
    }

    toOrderBy(sort?: IJobSourceSchema["Sort"]): IJobOrderBy | undefined {
        return sort as IJobOrderBy;
    }
}

/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_od4y7br1mrut9qugqo3h9v0t = true;
