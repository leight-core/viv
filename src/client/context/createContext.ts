import {createContext as coolCreateContext} from "react";

export const createContext = <TContext>() => coolCreateContext<TContext>(null as any);
