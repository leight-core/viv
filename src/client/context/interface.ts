import {ReactNode} from "react";

export type IProviderChildren<TContext> =
    ReactNode
    | ((context: TContext) => ReactNode);
