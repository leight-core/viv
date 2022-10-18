import {IContextRender} from "@leight/viv";
import {ReactNode}      from "react";

export type IProviderChildren<TContext> =
    ReactNode
    | IContextRender<TContext>;
