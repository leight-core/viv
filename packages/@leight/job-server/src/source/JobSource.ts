import {
    $JobSource,
    type IJobSource,
    type IJobSourceConfig
} from "@leight/job";
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
export class JobSource extends AbstractPrismaSource<IJobSourceConfig, IPrismaClient["job"]> implements IJobSource {
    constructor(
        @inject($PrismaClient) protected prismaClient: IPrismaClient,
    ) {
        super($JobSource, prismaClient.job);
    }
}
