import {type IUser}                     from "@leight-core/api";
import {type GetServerSidePropsContext} from "next";
import {
	getToken as getCoolToken,
	JWT
}                                       from "next-auth/jwt";
import {User}                           from "../user";

export const getToken = async <T extends JWT = JWT>(context: GetServerSidePropsContext<any, any>): Promise<T> => {
	const token = await getCoolToken({req: context.req as any}) as T;
	if (!token) {
		throw new Error("Token not available");
	}
	return token;
};
0;
export const getTokenUser = async (context: GetServerSidePropsContext<any, any>): Promise<IUser> => {
	const token: any = await getToken(context);
	return User({
		userId: token?.sub,
		tokens: token?.tokens,
	});
};

export const getOptionalToken = async <T extends JWT = JWT>(context: GetServerSidePropsContext<any, any>): Promise<T | undefined> => {
	try {
		return await getToken<T>(context);
	} catch (e) {
		return undefined;
	}
};
