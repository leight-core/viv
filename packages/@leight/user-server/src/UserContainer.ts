import {type IContainer} from "@leight/container";
import {
    $RegistrationService,
    $UserJwtService,
    $UserService,
    $UserSource,
    type IRegistrationService,
    type IUserJwtService,
    type IUserService,
    type IUserSource,
}                        from "@leight/user";
import "reflect-metadata";
import {
    RegistrationService,
    UserJwtService,
    UserService
}                        from "./service";
import {UserSource}      from "./source";

export interface IUserContainer {
    RegistrationService: IRegistrationService;
    UserJwtService: IUserJwtService;
    UserService: IUserService;
    UserSource: IUserSource;
}

export const UserContainer = (container: IContainer): IUserContainer => {
    container.register<IRegistrationService>($RegistrationService, {
        useClass: RegistrationService,
    });
    container.register<IUserJwtService>($UserJwtService, {
        useClass: UserJwtService,
    });
    container.register<IUserService>($UserService, {
        useClass: UserService,
    });
    container.register<UserSource>($UserSource, {
        useClass: UserSource,
    });

    return {
        get RegistrationService() {
            return container.resolve<IRegistrationService>($RegistrationService);
        },
        get UserJwtService() {
            return container.resolve<IUserJwtService>($UserJwtService);
        },
        get UserService() {
            return container.resolve<IUserService>($UserService);
        },
        get UserSource() {
            return container.resolve<IUserSource>($UserSource);
        },
    };
};
