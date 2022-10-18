import {
    IUser,
    User
}                                  from "@leight/viv";
import {GetServerSidePropsContext} from "next";
import {JWT}                       from "next-auth/jwt";

export const getOptionalToken = async <T extends JWT = JWT>(context: GetServerSidePropsContext<any, any>): Promise<T | undefined> => {
    try {
        return await getToken<T>(context);
    } catch (e) {
        return undefined;
    }
};
