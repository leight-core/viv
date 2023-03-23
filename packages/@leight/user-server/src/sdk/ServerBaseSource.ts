/**
 Base Source contains default implementation of Source for entity User. This could be used for further extensions,
 also default export uses this as a parent class.
 */
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
import {
    $UserSource,
    type IUserSourceSchema
}                       from "@leight/user";

type IEntity = IUserSourceSchema["Entity"];
type IQuery = IUserSourceSchema["Query"];

export class UserBaseSource extends AbstractSource<IUserSourceSchema> {
    static inject = [
        $PrismaClient,
    ];

    constructor(
        protected prismaClient: PrismaClient,
    ) {
        super($UserSource);
    }

    async runUpsert(props: ISource.IUpsert<IUserSourceSchema>): Promise<IEntity> {
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
        return this.prismaClient.user;
    }
}
