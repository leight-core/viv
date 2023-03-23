/**
 Base Source contains default implementation of Source for entity Job. This could be used for further extensions,
 also default export uses this as a parent class.
 */
import {
    $JobSource,
    type IJobSourceSchema
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

type IEntity = IJobSourceSchema["Entity"];
type IQuery = IJobSourceSchema["Query"];

export class JobBaseSource extends AbstractSource<IJobSourceSchema> {
    static inject = [
        $PrismaClient,
    ];

    constructor(
        protected prismaClient: PrismaClient,
    ) {
        super($JobSource);
    }

    async runUpsert(props: ISource.IUpsert<IJobSourceSchema>): Promise<IEntity> {
        return this.prisma().upsert(withUpsert(props));
    }

    async runCount(query?: IQuery): Promise<number> {
        return this.prisma().count({
            where: query?.filter,
        });
    }

    async runQuery(query?: IQuery): Promise<IEntity[]> {
        return this.prisma().findMany(withCursor({
            query,
            arg: {
                where:   query?.filter,
                orderBy: query?.sort,
            }
        }));
    }

    prisma() {
        return this.prismaClient.job;
    }
}
