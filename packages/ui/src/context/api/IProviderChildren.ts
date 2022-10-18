import {IContextRender} from "@leight/ui";
import {ReactNode}      from "react";

export type IProviderChildren<TContext> =
    ReactNode
    | IContextRender<TContext>;
