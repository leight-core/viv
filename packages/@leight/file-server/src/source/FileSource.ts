import {
    $FileSource,
    type IFileSource,
    type IFileSourceSchema
}                       from "@leight/file";
import {
    $PrismaClient,
    type PrismaClient
}                       from "@leight/prisma";
import {AbstractSource} from "@leight/source-server";

export class FileSource extends AbstractSource<IFileSourceSchema> implements IFileSource {
    static inject = [
        $PrismaClient,
    ];

    constructor(
        protected prismaClient: PrismaClient,
    ) {
        super($FileSource);
    }
}
