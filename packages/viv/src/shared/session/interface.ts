import {IUserRequest} from "@leight/viv";
import {Session}      from "next-auth";

export type ISession =
    Session
    & { withUser: IUserRequest };
