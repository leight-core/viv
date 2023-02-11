import {IUser}         from "@leight-core/api";
import {createContext} from "react";
import {
	useContext,
	useOptionalContext
}                      from "../context";

export interface IUserContext {
	user: IUser;
	isReady: boolean;
}

export const UserContext = createContext(null as unknown as IUserContext);

export const useUserContext         = () => useContext<IUserContext>(UserContext, "UserContext");
export const useOptionalUserContext = () => useOptionalContext<IUserContext>(UserContext as any);
