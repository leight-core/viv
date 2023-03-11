import {
    $JobSource,
    type IJobSource,
    type IJobSourceSchema,
}                       from "@leight/job";
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
export class JobSource extends AbstractSource<IJobSourceSchema> implements IJobSource {
    constructor(
        @inject($PrismaClient) protected prismaClient: IPrismaClient,
    ) {
        super($JobSource);
    }
}
