// Generated file
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

export class UserSource extends AbstractSource<IUserSourceSchema> implements IUserSource {
    static inject = [
        $PrismaClient,
    ];

    constructor(
        protected prismaClient: PrismaClient,
    ) {
        super($UserSource);
    }

    async runUpsert(props: ISource.IUpsert<IUserSourceSchema>): Promise<IUserSourceSchema["Entity"]> {
        return this.prismaClient.user.upsert(withUpsert(props));
    }

    async runCount(query?: IUserSourceSchema["Query"]): Promise<number> {
        return this.prismaClient.user.count({
            where: query?.filter,
        });
    }

    async runQuery(query?: IUserSourceSchema["Query"]): Promise<IUserSourceSchema["Entity"][]> {
        return this.prismaClient.user.findMany(withCursor({
            query,
            arg: {
                where:   query?.filter,
                orderBy: query?.sort,
            }
        }));
    }
}

export const UserSourceContext = (container: IContainer) => new ServiceContext<IUserSource>(container, $UserSource);
