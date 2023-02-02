import {$UserService, type IUserService} from "@leight/user";
import {type IContainer, ServiceContext} from "@leight/container";

/**
 * Wrapper for accessing typed UserService from any container.
 */
export const UserServiceContext = (container: IContainer) => new ServiceContext<IUserService>(container, $UserService);
