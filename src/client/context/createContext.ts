import {
    Context,
    createContext as coolCreateContext
} from "react";

export const createContext = <TContext>(): Context<TContext> => {
    return coolCreateContext(null as TContext);
};
