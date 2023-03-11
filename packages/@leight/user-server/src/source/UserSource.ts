import {
    $PrismaClient,
    type IPrismaClient
}                       from "@leight/prisma";
import {AbstractSource} from "@leight/source-server";
import {
    $UserSource,
    type IUserSource,
    type IUserSourceSchema,
}                       from "@leight/user";
import {
    inject,
    injectable
}                       from "tsyringe";

@injectable()
export class UserSource extends AbstractSource<IUserSourceSchema> implements IUserSource {
    constructor(
        @inject($PrismaClient) protected prismaClient: IPrismaClient,
    ) {
        super($UserSource);
    }
}
