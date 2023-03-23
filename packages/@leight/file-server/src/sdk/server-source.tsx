// Generated file
import {
    type IContainer,
    ServiceContext
}                            from "@leight/container";
import {
    $FileSource,
    FileQuerySchema,
    type IFileSource,
    type IFileSourceSchema
}                            from "@leight/file";
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

type IEntity = IFileSourceSchema["Entity"];
type IQuery = IFileSourceSchema["Query"];

export class FileSource extends AbstractSource<IFileSourceSchema> implements IFileSource {
    static inject = [
        $PrismaClient,
    ];

    constructor(
        protected prismaClient: PrismaClient,
    ) {
        super($FileSource);
    }

    async runUpsert(props: ISource.IUpsert<IFileSourceSchema>): Promise<IEntity> {
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
        return this.prismaClient.file;
    }
}

export const FileSourceContext   = (container: IContainer) => new ServiceContext<IFileSource>(container, $FileSource);
export const FileSourceProcedure = withSourceProcedure<IFileSourceSchema>({
    source: $FileSource,
    schema: FileQuerySchema,
});
