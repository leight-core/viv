import {
    IContextRender,
    IProviderChildren,
}                   from "@leight/ui";
import {isCallable} from "@leight/utils";
import {
    Context as CoolContext,
    createContext as coolCreateContext,
    ReactNode,
    useContext as coolUseContext
}                   from "react";

export class Context {
    static factory<TContext>(name: string): [CoolContext<TContext | null>, () => TContext, () => TContext | null] {
        const context       = this.create<TContext>();
        context.displayName = name;
        return [
            context,
            () => this.useContext<TContext>(context, name),
            () => this.useOptionalContext<TContext>(context),
        ];
    }

    static create<TContext>() {
        return coolCreateContext<TContext | null>(null);
    }

    static useContext<TContext>(context: CoolContext<TContext | null>, name: string, hint?: string): TContext {
        const $context = coolUseContext(context);
        if (!$context) {
            throw new Error(`There is no [${name}] context available.${hint ? " " + hint : ""} `);
        }
        return $context;
    }

    static useOptionalContext<TContext>(context: CoolContext<TContext | null>): TContext | null {
        return coolUseContext(context);
    }

    static render<TChildren, TContext extends CoolContext<TChildren | null>>(children: IProviderChildren<TChildren>, Context: TContext) {
        return isCallable(children) ? <Context.Consumer>{context => {
            if (!context) {
                throw new Error(`There is no [${Context.displayName}] context provider.`);
            }
            return (children as IContextRender<TChildren>)(context);
        }}</Context.Consumer> : children as ReactNode;
    }
}
