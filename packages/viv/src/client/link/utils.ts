import {IQueryParams} from "@leight/viv";
import {compile}      from "path-to-regexp";

export const toLink = <TQuery extends IQueryParams | void = void>(href: string, query?: TQuery): string => {
    return href === "/" ? href : compile(href.replace(/\[(.*?)\]/g, ":$1").replace(/{(.*?)}/g, ":$1"))(query || {});
};
