import {type IContainer} from "../../container";
import {
    type ITokenService,
    type IUserService
}                        from "../../user";

export interface IContext {
    container: IContainer;
    userService: IUserService;
    tokenService: ITokenService;

    /**
     * Shortcut to tokenService for checking user's tokens (connected to checkAny())
     */
    checkAny(tokens?: string[]): void;
}
