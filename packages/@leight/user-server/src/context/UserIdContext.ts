import {
    type IContainer,
    ServiceContext
}                from "@leight/container";
import {$UserId} from "@leight/user";

export class $UserIdContext extends ServiceContext<string | undefined> {
    constructor(container: IContainer) {
        super(container, $UserId);
    }

    register(userId?: string): this {
        this.container.register<string | undefined>($UserId, {
            /**
             * Must be an empty string as container will fail to resolve
             * dependency if it's undefined.
             */
            useValue: userId || "",
        });
        return this;
    }
}

/**
 * Creates a wrapper for user id used in UserService.
 */
export const UserIdContext = (container: IContainer) => new $UserIdContext(container);
