import {
    $JobSource,
    type IJobSource,
    type IJobSourceSchema,
}                       from "@leight/job";
import {
    $PrismaClient,
    type PrismaClient
}                       from "@leight/prisma";
import {AbstractSource} from "@leight/source-server";

export class JobSource extends AbstractSource<IJobSourceSchema> implements IJobSource {
    static inject = [
        $PrismaClient,
    ];

    constructor(
        protected prismaClient: PrismaClient,
    ) {
        super($JobSource);
    }
}
