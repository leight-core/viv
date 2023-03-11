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
import "reflect-metadata";
import {
    inject,
    injectable
}                       from "tsyringe";

@injectable()
export class FileSource extends AbstractSource<IFileSourceSchema> implements IFileSource {
    constructor(
        @inject($PrismaClient) protected prismaClient: IPrismaClient,
    ) {
        super($FileSource);
    }
}
