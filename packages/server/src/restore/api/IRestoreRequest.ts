import {
    IServiceContainer,
    ISource
}                     from "@leight/server";
import {PrismaClient} from "@prisma/client";

export interface IRestoreRequest {
    container: IServiceContainer;
    sources: ISource<any, any, any>[];
    archive: string;
    temp?: string;
    prisma: PrismaClient;
    timeout?: number;
}
