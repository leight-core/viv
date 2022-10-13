import {IUserRequest} from "@leight-core/viv";
import {Session}      from "next-auth";

export type ISession =
    Session
    & { withUser: IUserRequest };
