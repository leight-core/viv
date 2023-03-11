import {
    $FileSource,
    type IFileSource,
    type IFileSourceSchema
}                       from "@leight/file";
import {
    $PrismaClient,
    type IPrismaClient
}                       from "@leight/prisma";
import {AbstractSource} from "@leight/source-server";

export class FileSource extends AbstractSource<IFileSourceSchema> implements IFileSource {
    static inject = [
        $PrismaClient,
    ];

    constructor(
        protected prismaClient: IPrismaClient,
    ) {
        super($FileSource);
    }
}
