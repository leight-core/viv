/**
	Base Prisma Source contains default implementation of Source for entity File connected to Prisma. This could be used for further extensions,
    also default export uses this as a parent class.
 */
import {withCursor} from "@leight/query";
import {
	$PrismaClient,
	type PrismaClient
} from "@leight/prisma";
import {type ISource} from "@leight/source";
import {
	AbstractSource,
	withUpsert,
	withPatch
} from "@leight/source-server";
import {
	$FileSource,
	type IFileWhere,
	type IFileWhereUnique,
	type IFileOrderBy,
	type IFileSourceSchema
} from "@leight/file";

export class FileBasePrismaSource extends AbstractSource<IFileSourceSchema> {
	static inject = [
        $PrismaClient,
    ];

    constructor(
        protected prismaClient: PrismaClient,
    ) {
        super($FileSource);
    }

    async runFind(id: string): Promise<IFileSourceSchema["Entity"]> {
        return this.prisma().findUniqueOrThrow({
            where: {id},
        });
    }

    async runCreate(entity: IFileSourceSchema["Create"]): Promise<IFileSourceSchema["Entity"]> {
        return this.prisma().create({
            data: entity,
        });
    }

    async runPatch(patch: IFileSourceSchema["Patch"]): Promise<IFileSourceSchema["Entity"]> {
        return this.prisma().update(withPatch(patch));
    }

    async runUpsert(props: ISource.IUpsert<IFileSourceSchema>): Promise<IFileSourceSchema["Entity"]> {
        return this.prisma().upsert(withUpsert(props));
    }

    async runCount(query?: IFileSourceSchema["Query"]): Promise<number> {
        return this.prisma().count({
            where: this.toWhere(query?.filter),
        });
    }

    async runQuery(query?: IFileSourceSchema["Query"]): Promise<IFileSourceSchema["Entity"][]> {
        return this.prisma().findMany(withCursor({
            query,
            arg: {
                where:   this.toWhere(query?.filter),
                orderBy: this.toOrderBy(query?.sort),
            }
        }));
    }
    
    prisma() {
        return this.prismaClient.file;
    }
    
    toWhere(filter?: IFileSourceSchema["Filter"]): IFileWhere | undefined {
        return filter;
    }
    
    toWhereUnique(filter?: IFileSourceSchema["Filter"]): IFileWhereUnique | undefined {
        return undefined;
    }
    
    toOrderBy(sort?: IFileSourceSchema["Sort"]): IFileOrderBy | undefined {
        return sort as IFileOrderBy;
    }
}

/**
 * Default export marking a file it's generated and also preventing failing
 * an empty file export (every module "must" have an export).
 */
export const $leight_kqh9bfe4gjafcrgv2unnyoax = true;