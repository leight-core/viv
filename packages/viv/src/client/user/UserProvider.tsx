import {UserOutlined} from "@ant-design/icons";
import {
    IUserRequest,
    LoaderLayout,
    User,
    UserContext
}                     from "@leight/viv";
import {
    FC,
    PropsWithChildren,
    ReactNode,
}                     from "react";
import {useMemo}      from "use-memo-one";

export type IUserProviderProps = PropsWithChildren<{
    logo?: ReactNode;
    user: IUserRequest;
    isReady: boolean;
    block?: boolean;
}>

export const UserProvider: FC<IUserProviderProps> = ({user, isReady, block = true, logo, ...props}) => {
    const $user = User(user);
    return <UserContext.Provider
        value={useMemo(() => ({
            user: $user,
            isReady,
        }), [$user.userId])}
    >
        <LoaderLayout
            logo={logo}
            icon={<UserOutlined/>}
            loading={!isReady && block}
            result={$user}
            errorText={"User cannot be resolved."}
            {...props}
        />
    </UserContext.Provider>;
};
