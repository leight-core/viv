import {
    type IToken,
    type IUserJwtService
}                   from "@leight/user";
import {injectable} from "tsyringe";

/**
 * Service used to prepare user's JWT token.
 */
@injectable()
export class UserJwtService implements IUserJwtService {
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
