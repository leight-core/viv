import {
    type IContainer,
    ServiceContext
} from "@leight/container";
import {
    $UserService,
    type IUserService
} from "@leight/user";

/**
 * Wrapper for accessing typed UserService from any container.
 */
export const UserServiceContext = (container: IContainer) => new ServiceContext<IUserService>(container, $UserService);
