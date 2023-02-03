import {type Session} from "next-auth";
import {type IUserRequest} from "../user";

export type ISession =
	Session
	& { withUser: IUserRequest };
