import {
    type IContainer,
    ServiceContext
} from "@leight/container";
import {
    $RegistrationService,
    $UserJwtService,
    $UserService,
    type IRegistrationService,
    type IUserJwtService,
    type IUserService
} from "../api";

/**
 * Wrapper for accessing typed UserService from any container.
 */
export const UserServiceContext         = (container: IContainer) => new ServiceContext<IUserService>(container, $UserService);
export const RegistrationServiceContext = (container: IContainer) => new ServiceContext<IRegistrationService>(container, $RegistrationService);
export const UserJwtServiceContext      = (container: IContainer) => new ServiceContext<IUserJwtService>(container, $UserJwtService);
