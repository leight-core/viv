import {compile}         from "path-to-regexp";
import {type IHrefProps} from "../$export/IHrefProps";

export const linkTo = (
    {
        href,
        query
    }: IHrefProps) => compile(href.replaceAll(/{(.*?)}/g, ":$1"))(query);
