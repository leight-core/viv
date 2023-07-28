import {useEffect}           from "react";
import {type ILocaleOfProps} from "../utils/localeOf";
import {useLocaleOf}         from "./useLocaleOf";

export interface IUseDetectLocaleProps {
    locale: ILocaleOfProps;

    callback(props: ILocaleOfProps & {
        locale: string
    }): void;
}

export const useDetectLocale = (
    {
        locale,
        callback,
    }: IUseDetectLocaleProps) => {
    const $locale = useLocaleOf(locale);
    useEffect(() => {
        callback({
            ...locale,
            locale: $locale,
        });
    }, [$locale]);
};
