import {
    $FileSource,
    type IFileSource,
    type IFileSourceSchema
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
export class FileSource extends AbstractPrismaSource<IFileSourceSchema, IPrismaClient["file"]> implements IFileSource {
    constructor(
        @inject($PrismaClient) prismaClient: IPrismaClient,
    ) {
        super($FileSource, prismaClient.file);
    }
}
