import {
    IUser,
    useContext,
    useOptionalContext
}                      from "@leight-core/viv";
import {createContext} from "react";

export interface IUserContext {
    user: IUser;
    isReady: boolean;
}

export const UserContext = createContext(null as unknown as IUserContext);

export const useUserContext         = () => useContext<IUserContext>(UserContext, "UserContext");
export const useOptionalUserContext = () => useOptionalContext<IUserContext>(UserContext as any);
