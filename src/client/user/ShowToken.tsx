import {useOptionalUserContext} from "@leight/viv";
import {
    FC,
    PropsWithChildren
}                               from "react";

export type IShowTokenProps = PropsWithChildren<{
    tokens?: string[];
}>

/**
 * Show children if token check passes or NULL *do not render anything).
 */
export const ShowToken: FC<IShowTokenProps> = ({tokens, children}) => {
    const userContext = useOptionalUserContext();
    return !userContext || userContext.user.hasAny(tokens) ? <>{children}</> : null;
};
