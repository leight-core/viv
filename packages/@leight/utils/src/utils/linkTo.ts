import {compile}         from "path-to-regexp";
import {type IHrefProps} from "../api/IHrefProps";

export const linkTo = (
    {
        href,
        query
    }: IHrefProps) => compile(href.replace(/\[(.*?)\]/g, ":$1").replace(/{(.*?)}/g, ":$1"))(query || {});
