// Generated file
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

export class JobSource extends AbstractSource<IJobSourceSchema> implements IJobSource {
    static inject = [
        $PrismaClient,
    ];

    constructor(
        protected prismaClient: PrismaClient,
    ) {
        super($JobSource);
    }

    async runUpsert(props: ISource.IUpsert<IJobSourceSchema>): Promise<IJobSourceSchema["Entity"]> {
        return this.prismaClient.job.upsert(withUpsert(props));
    }

    async runCount(query?: IJobSourceSchema["Query"]): Promise<number> {
        return this.prismaClient.job.count({
            where: query?.filter,
        });
    }

    async runQuery(query?: IJobSourceSchema["Query"]): Promise<IJobSourceSchema["Entity"][]> {
        return this.prismaClient.job.findMany(withCursor({
            query,
            arg: {
                where:   query?.filter,
                orderBy: query?.sort,
            }
        }));
    }
}

export const JobSourceContext   = (container: IContainer) => new ServiceContext<IJobSource>(container, $JobSource);
export const JobSourceProcedure = withSourceProcedure<IJobSourceSchema>({
    source: $JobSource,
    schema: JobQuerySchema,
});
