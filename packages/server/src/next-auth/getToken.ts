import {GetServerSidePropsContext} from "next";
import {
    getToken as getCoolToken,
    JWT
}                                  from "next-auth/jwt";

export const getToken = async <T extends JWT = JWT>(context: GetServerSidePropsContext<any, any>): Promise<T> => {
    const token = await getCoolToken({req: context.req as any}) as T;
    if (!token) {
        throw new Error("Token not available");
    }
    return token;
};
