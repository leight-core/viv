import {IContextRender} from "@leight-core/viv";
import {ReactNode}      from "react";

export type IProviderChildren<TContext> =
    ReactNode
    | IContextRender<TContext>;
