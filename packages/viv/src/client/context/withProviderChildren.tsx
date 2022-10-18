import {isCallable} from "@leight/utils";
import {
    IContextRender,
    IProviderChildren,
}                   from "@leight/viv";
import {
    Context,
    ReactNode
}                   from "react";

export const withProviderChildren = <TChildren, TContext extends Context<TChildren | null>>(children: IProviderChildren<TChildren>, Context: TContext) => {
    return isCallable(children) ? <Context.Consumer>{context => {
        if (!context) {
            throw new Error(`There is no [${Context.displayName}] context provider.`);
        }
        return (children as IContextRender<TChildren>)(context);
    }}</Context.Consumer> : children as ReactNode;
};
