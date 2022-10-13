import {IUserRequest} from "@leight-core/api";
import {Session}      from "next-auth";

export type ISession =
	Session
	& { withUser: IUserRequest };
