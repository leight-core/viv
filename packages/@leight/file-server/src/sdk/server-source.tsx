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

export class FileSource extends AbstractSource<IFileSourceSchema> implements IFileSource {
    static inject = [
        $PrismaClient,
    ];

    constructor(
        protected prismaClient: PrismaClient,
    ) {
        super($FileSource);
    }

    async runUpsert(props: ISource.IUpsert<IFileSourceSchema>): Promise<IFileSourceSchema["Entity"]> {
        return this.prismaClient.file.upsert(withUpsert(props));
    }

    async runCount(query?: IFileSourceSchema["Query"]): Promise<number> {
        return this.prismaClient.file.count({
            where: query?.filter,
        });
    }

    async runQuery(query?: IFileSourceSchema["Query"]): Promise<IFileSourceSchema["Entity"][]> {
        return this.prismaClient.file.findMany(withCursor({
            query,
            arg: {
                where:   query?.filter,
                orderBy: query?.sort,
            }
        }));
    }
}

export const FileSourceContext   = (container: IContainer) => new ServiceContext<IFileSource>(container, $FileSource);
export const FileSourceProcedure = withSourceProcedure<IFileSourceSchema>({
    source: $FileSource,
    schema: FileQuerySchema,
});
