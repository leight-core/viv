/**
 Base Prisma Source contains default implementation of Source for entity User connected to Prisma. This could be used for further extensions,
 also default export uses this as a parent class.
 */
import {
    $PrismaClient,
    type PrismaClient
}                     from "@leight/prisma";
import {withCursor}   from "@leight/query";
import {type ISource} from "@leight/source";
import {
    AbstractSource,
    withPatch,
    withUpsert
}                     from "@leight/source-server";
import {
    $UserSource,
    type IUserOrderBy,
    type IUserSourceSchema,
    type IUserWhere,
    type IUserWhereUnique
}                     from "@leight/user";

export class UserBasePrismaSource extends AbstractSource<IUserSourceSchema> {
    static inject = [
        $PrismaClient,
    ];

    constructor(
        protected prismaClient: PrismaClient,
    ) {
        super($UserSource);
    }

    async runFind(id: string): Promise<IUserSourceSchema["Entity"]> {
        return this.prisma().findUniqueOrThrow({
            where: {id},
        });
    }

    async runCreate(entity: IUserSourceSchema["Create"]): Promise<IUserSourceSchema["Entity"]> {
        return this.prisma().create({
            data: entity,
        });
    }

    async runPatch(patch: IUserSourceSchema["Patch"]): Promise<IUserSourceSchema["Entity"]> {
        return this.prisma().update(withPatch(patch));
    }

    async runUpsert(props: ISource.IUpsert<IUserSourceSchema>): Promise<IUserSourceSchema["Entity"]> {
        return this.prisma().upsert(withUpsert(props));
    }

    async runCount(query?: IUserSourceSchema["Query"]): Promise<number> {
        return this.prisma().count({
            where: this.toWhere(query?.filter),
        });
    }

    async runQuery(query?: IUserSourceSchema["Query"]): Promise<IUserSourceSchema["Entity"][]> {
        return this.prisma().findMany(withCursor({
            query,
            arg: {
                where:   this.toWhere(query?.filter),
                orderBy: this.toOrderBy(query?.sort),
            }
        }));
    }

    prisma() {
        return this.prismaClient.user;
    }

    toWhere(filter?: IUserSourceSchema["Filter"]): IUserWhere | undefined {
        return filter;
    }

    toWhereUnique(filter?: IUserSourceSchema["Filter"]): IUserWhereUnique | undefined {
        return undefined;
    }

    toOrderBy(sort?: IUserSourceSchema["Sort"]): IUserOrderBy | undefined {
        return sort as IUserOrderBy;
    }
}

/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_warlnb5bulfveen8k15j5bt1 = true;
