import {type IContainer}            from "@leight/container";
import {PrismaServiceContext}       from "@leight/prisma";
import {
    RegistrationServiceContext,
    UserJwtServiceContext
}                                   from "@leight/user";
import {Logger}                     from "@leight/winston";
import {PrismaAdapter}              from "@next-auth/prisma-adapter";
import NextAuth, {type AuthOptions} from "next-auth";
import {type Provider}              from "next-auth/providers";

export interface INextAuthEndpointProps {
    options?: AuthOptions;
    providers: Provider[];
    container: IContainer;
}

export const NextAuthEndpoint = ({options, providers, container}: INextAuthEndpointProps) => {
    const registrationService = RegistrationServiceContext(container).resolve();
    const userJwtService      = UserJwtServiceContext(container).resolve();

    const logger = Logger("auth");

    return NextAuth({
        theme:     {
            logo:        "/logo.png",
            brandColor:  "#1890ff",
            colorScheme: "light",
        },
        events:    {
            signIn:  ({user}) => {
                logger.debug("User sign-in", {label: {userId: user.id}});
            },
            signOut: ({token: {sub}}) => {
                logger.debug("User sign-out", {label: {userId: sub}});
            },
        },
        adapter:   PrismaAdapter(PrismaServiceContext(container).resolve()),
        session:   {
            strategy: "jwt",
        },
        providers,
        callbacks: {
            jwt:     async (token) => {
                try {
                    await registrationService.handle(
                        token
                    );
                    return await userJwtService.token(
                        token.token
                    );
                } catch (e) {
                    if (e instanceof Error) {
                        logger.error(e.message);
                        logger.error(e.stack);
                    }
                    throw e;
                }
            },
            session: async ({session, token}) => {
                const $session = {...session};
                if ($session && token?.sub) {
                    $session.user = {
                        userId: token.sub,
                        tokens: token.tokens,
                        ...session.user,
                    };
                }
                return $session;
            },
        },
        ...options,
    });
};
