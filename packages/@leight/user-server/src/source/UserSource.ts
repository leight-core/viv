import {
    $PrismaClient,
    AbstractPrismaSource,
    type IPrismaClient
} from "@leight/prisma";
import {
    $UserSource,
    type IUserSource,
    type IUserSourceSchema,
} from "@leight/user";
import {
    inject,
    injectable
} from "tsyringe";

@injectable()
export class UserSource extends AbstractPrismaSource<IUserSourceSchema, IPrismaClient["user"]> implements IUserSource {
    constructor(
        @inject($PrismaClient) prismaClient: IPrismaClient,
    ) {
        super($UserSource, prismaClient.user);
    }
}
