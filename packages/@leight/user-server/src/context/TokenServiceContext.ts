import {$TokenService, type ITokenService} from "@leight/user";
import {type IContainer, ServiceContext} from "@leight/container";
import {TokenService} from "../service";

export class $TokenServiceContext extends ServiceContext<ITokenService> {
    constructor(container: IContainer) {
        super(container, $TokenService);
    }

    register(tokens: string[]): this {
        this.container.register<ITokenService>($TokenService, {
            useValue: new TokenService(tokens),
        });
        return this;
    }
}

export const TokenServiceContext = (container: IContainer) => new $TokenServiceContext(container);
