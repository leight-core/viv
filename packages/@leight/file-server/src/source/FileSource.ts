import {
    $FileSource,
    type IFileSource,
    type IFileSourceConfig
} from "@leight/file";
import {
    $PrismaClient,
    AbstractPrismaSource,
    type IPrismaClient
} from "@leight/prisma";
import "reflect-metadata";
import {
    inject,
    injectable
} from "tsyringe";

@injectable()
export class FileSource extends AbstractPrismaSource<IFileSourceConfig, IPrismaClient["file"]> implements IFileSource {
    constructor(
        @inject($PrismaClient) protected prismaClient: IPrismaClient,
    ) {
        super($FileSource, prismaClient.file);
    }
}
