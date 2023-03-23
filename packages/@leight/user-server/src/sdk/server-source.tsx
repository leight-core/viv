/**
 Source code containing implementation of Server-side Source for User, TRPC router part (if no disabled) and
 some other cool stuff.
 */
import {
    type IContainer,
    ServiceContext
}                       from "@leight/container";
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
    type IUserSource,
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

export class UserSource extends (await import("../source")).UserSourceEx implements IUserSource {
}

export const UserSourceContext = (container: IContainer) => new ServiceContext<IUserSource>(container, $UserSource);
