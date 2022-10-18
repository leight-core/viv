import {
    IUserRequest,
    User
}                from "@leight/shared";
import {
    Context,
    IProviderChildren,
    IUserContext,
    UserContext
}                from "@leight/ui";
import {
    FC,
    ReactNode,
}                from "react";
import {useMemo} from "use-memo-one";

export interface IUserProviderProps {
    logo?: ReactNode;
    user: IUserRequest;
    children?: IProviderChildren<IUserContext>;
}

export const UserProvider: FC<IUserProviderProps> = ({user, children}) => {
    const $user = User(user);
    return <UserContext.Provider
        value={useMemo(() => ({
            user: $user,
            get isReady() {
                return !!$user.userId;
            },
        }), [$user.userId])}
    >
        {Context.render(children, UserContext)}
    </UserContext.Provider>;
};
