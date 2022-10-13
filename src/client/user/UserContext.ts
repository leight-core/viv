import {
    createContext,
    IUser,
    useContext,
    useOptionalContext
} from "@leight-core/viv";

export interface IUserContext {
    user: IUser;
    isReady: boolean;
}

export const UserContext = createContext<IUserContext>();

export const useUserContext         = () => useContext<IUserContext>(UserContext, "UserContext");
export const useOptionalUserContext = () => useOptionalContext<IUserContext>(UserContext);
