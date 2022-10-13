import {
    IProviderChildren,
    isCallable
} from "@leight-core/viv";
import {
    Context,
    ReactNode
} from "react";

export const withProviderChildren = <TChildren, TContext extends Context<TChildren>>(children: IProviderChildren<TChildren>, Consumer: TContext) => {
    return isCallable(children) ? <Consumer.Consumer>{children as any}</Consumer.Consumer> : children as ReactNode;
};
