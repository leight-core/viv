import {
    $PrismaClient,
    type IPrismaClient
} from "@leight/prisma";
import {
    type IToken,
    type IUserJwtService
} from "@leight/user";
import {
    inject,
    injectable
} from "tsyringe";

/**
 * Service used to prepare user's JWT token.
 */
@injectable()
export class UserJwtService implements IUserJwtService {
    constructor(
        @inject($PrismaClient) protected prisma: IPrismaClient,
    ) {
    }

    public async token<T extends IToken>(props: T): Promise<T> {
        return {
            ...props,
            tokens: this.defaults(),
        };
    }

    public defaults(): string[] {
        return ["user"];
    }
}
