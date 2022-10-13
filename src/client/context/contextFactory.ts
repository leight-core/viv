import {
    createContext,
    useContext,
    useOptionalContext
}                from "@leight-core/viv";
import {Context} from "react";

/**
 * Creates simple default context stuff; if a context uses generics,
 * this method would not help.
 * @param name
 */
export const contextFactory = <TContext>(name: string): [Context<TContext>, () => TContext, () => TContext | null] => {
    const context = createContext<TContext>();
    return [
        context,
        () => useContext<TContext>(context, name),
        () => useOptionalContext<TContext>(context),
    ];
};
