import buildUrl          from "build-url-ts";
import isEmpty           from "is-empty";
import {
    compile,
    match
}                        from "path-to-regexp";
import {isString}        from "../$export/isString";
import {type IHrefProps} from "../api/IHrefProps";
import {diffOf}          from "./diffOf";

export const linkTo = (props: IHrefProps | string) => {
    if (isString(props)) {
        return props;
    }
    const {
        query,
        href
    } = props;
    const $query = query || {};
    const link = href.replace(/\[(.*?)\]/g, ":$1").replace(/{(.*?)}/g, ":$1");
    const compiled = compile(link)($query);
    const matched = match(link)(compiled);
    const queryParams = diffOf(
        Object.keys($query),
        Object.keys(matched ? matched.params : {}),
    ).reduce((prev, current) => {
        return {
            ...prev,
            [current]: (query as any)[current],
        };
    }, {});
    return buildUrl({
        path:        compiled,
        queryParams: isEmpty(queryParams) ? undefined : queryParams,
    });
};
