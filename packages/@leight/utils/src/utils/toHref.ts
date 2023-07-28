import {compile}         from "path-to-regexp";
import {type IHrefProps} from "../$export/IHrefProps";
import {type IHrefQuery} from "../$export/IHrefQuery";

export const toHref = <TQuery extends IHrefQuery = IHrefQuery>(
    {
        href,
        query,
    }: IHrefProps<TQuery>): string => {
    return href === "/"
        ? href
        : compile(href.replace(/\[(.*?)\]/g, ":$1").replace(/{(.*?)}/g, ":$1"))(
            query || {}
        );
};
