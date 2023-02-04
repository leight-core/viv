import {type ComponentProps, type FC, type PropsWithChildren} from "react";
import {Template} from "../template";
import {useOptionalUserContext} from "./UserContext";

export type IWithTokenProps = PropsWithChildren<{
	tokens?: string[];
	label?: ComponentProps<typeof Template>["label"];
	template?: ComponentProps<typeof Template>;
}>

/**
 * Shows children if token check passes or Template with 403 error content (translatable).
 */
export const WithToken: FC<IWithTokenProps> = ({tokens, label, template, children}) => {
	const userContext = useOptionalUserContext();
	return !userContext || userContext.user.hasAny(tokens) ? <>{children}</> : <Template
		status={"403"}
		label={label}
		{...template}
	/>;
};