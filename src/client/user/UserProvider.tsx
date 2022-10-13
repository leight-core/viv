import {UserOutlined} from "@ant-design/icons";
import {IUserRequest} from "@leight-core/api";
import {
	LoaderLayout,
	User,
	UserContext
}                     from "@leight-core/client";
import {
	FC,
	PropsWithChildren,
	ReactNode
}                     from "react";

export type IUserProviderProps = PropsWithChildren<{
	logo?: ReactNode;
	user: IUserRequest;
	isReady: boolean;
	block?: boolean;
}>

export const UserProvider: FC<IUserProviderProps> = ({user, isReady, block = true, logo, ...props}) => {
	const $user = User(user);
	return <UserContext.Provider
		value={{
			user: $user,
			isReady,
		}}
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
