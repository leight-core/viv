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

export class UserSource extends AbstractSource<IUserSourceSchema> implements IUserSource {
    static inject = [
        $PrismaClient,
    ];

    constructor(
        protected prismaClient: IPrismaClient,
    ) {
        super($UserSource);
    }

    async findByEmail(email: string): Promise<IUserSourceSchema["Entity"]> {
        return this.prismaClient.user.findUniqueOrThrow({
            where: {
                email,
            }
        });
    }
}
