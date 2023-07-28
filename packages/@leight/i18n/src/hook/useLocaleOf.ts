import {useMemo} from "react";
import {
    type ILocaleOfProps,
    localeOf
}                from "../utils/localeOf";

export type IUseLocaleOfProps = ILocaleOfProps;

export const useLocaleOf = (props: IUseLocaleOfProps) => {
    return useMemo(() => localeOf(props), [props.fallback, ...props.available]);
};
