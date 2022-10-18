import {getToken}                  from "@leight/server";
import {
    IUser,
    User,
}                                  from "@leight/shared";
import {GetServerSidePropsContext} from "next";

export const getTokenUser = async (context: GetServerSidePropsContext<any, any>): Promise<IUser> => {
    const token: any = await getToken(context);
    return User({
        userId: token?.sub,
        tokens: token?.tokens,
    });
};
