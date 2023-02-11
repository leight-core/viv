import {
	Context,
	useContext as coolUseContext
} from "react";

/**
 * Ensure that context exists or an error is thrown.
 *
 * @param context requested context
 * @param name name of context - used when an error should be thrown
 * @param hint optional hint in the error
 */
export const useContext = <TContext>(context: Context<TContext>, name: string, hint?: string): TContext => {
	const current = coolUseContext<TContext>(context);
	if (!current) {
		throw new Error(`There is no [${name}] context available.${hint ? " " + hint : ""} `);
	}
	return current;
};

export const useOptionalContext = <TContext>(context: Context<TContext | null>): TContext | null => {
	return coolUseContext<TContext | null>(context);
};
