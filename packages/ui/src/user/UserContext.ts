import {
    Context,
    IUserContext
} from "@leight/ui";

export const [
                 UserContext,
                 useUserContext,
                 useOptionalUserContext,
             ] = Context.factory<IUserContext>("UserContext");
