import {Url}     from "@leight/utils";
import {compile} from "path-to-regexp";

export const linkTo = <TQuery extends Url.IQuery = Url.IQuery>(href: string, query?: TQuery): string => {
    return href === "/" ? href : compile(href.replace(/\[(.*?)\]/g, ":$1").replace(/{(.*?)}/g, ":$1"))(query || {});
};
