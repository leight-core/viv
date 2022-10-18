import {useOptionalUserContext} from "@leight/ui";
import {
    FC,
    PropsWithChildren,
    ReactNode
}                               from "react";

export type IWithTokenProps = PropsWithChildren<{
    tokens?: string[];
    render403?: () => ReactNode;
}>

/**
 * Show children if token check passes or NULL *do not render anything).
 */
export const WithToken: FC<IWithTokenProps> = ({tokens, render403 = () => null, children}) => {
    const userContext = useOptionalUserContext();
    return <>{!userContext || userContext.user.hasAny(tokens) ? children : render403()}</>;
};
