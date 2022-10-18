import {IUserRequest} from "@leight/shared";
import {Session}      from "next-auth";

export type ISession =
    Session
    & { withUser: IUserRequest };
