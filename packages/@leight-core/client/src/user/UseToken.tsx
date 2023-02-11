import {
	cloneElement,
	FC,
	ReactElement
}                               from "react";
import {useOptionalUserContext} from "./UserContext";

export interface IUseTokenProps {
	tokens?: string[];
	children: ReactElement<{ disabled: boolean }>;
}

/**
 * Simple component which will clone children with "disabled: true" prop if token check not passes; useful for example for
 * buttons.
 */
export const UseToken: FC<IUseTokenProps> = ({tokens, children}) => {
	const userContext = useOptionalUserContext();
	return !userContext || userContext.user.hasAny(tokens) ? <>{children}</> : cloneElement(children, {disabled: true});
};
