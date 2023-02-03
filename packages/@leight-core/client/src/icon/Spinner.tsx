import React, {FC, PropsWithChildren} from "react";
import {LoaderIcon} from "./LoaderIcon";

export type ISpinner = PropsWithChildren<{
	done?: boolean,
}>;

/**
 * Spinner is simple placeholder component - until truthy "done" is not true, spinner icon is shown.
 * When true, children prop is rendered.
 */
export const Spinner: FC<ISpinner> = (
	{
		done = false,
		children
	}) => {
	return (done ? <>{children}</> : <LoaderIcon/>);
};
