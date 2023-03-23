/**
 Source code containing implementation of Server-side Source for Job, TRPC router part (if no disabled) and
 some other cool stuff.
 */
import {
    type IContainer,
    ServiceContext
}                            from "@leight/container";
import {
    $JobSource,
    type IJobSource,
    type IJobSourceSchema,
    JobQuerySchema
}                            from "@leight/job";
import {
    $PrismaClient,
    type PrismaClient
}                            from "@leight/prisma";
import {withCursor}          from "@leight/query";
import {
    type ISource,
    withUpsert
}                            from "@leight/source";
import {AbstractSource}      from "@leight/source-server";
import {withSourceProcedure} from "@leight/trpc-source-server";

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

export class JobSource extends JobBaseSource implements IJobSource {
}

export const JobSourceContext   = (container: IContainer) => new ServiceContext<IJobSource>(container, $JobSource);
export const JobSourceProcedure = withSourceProcedure<IJobSourceSchema>({
    source: $JobSource,
    schema: JobQuerySchema,
});
