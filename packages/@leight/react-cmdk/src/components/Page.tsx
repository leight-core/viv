import React, {
    useContext,
    useEffect
}                               from "react";
import {useCommandPaletteState} from "../store";
import {JsonStructure}          from "../types";
import {PageContext,}           from "../utils";
import {
    filterItems,
    renderJsonStructure
}                               from "../utils/utils";

interface PageProps {
    searchPrefix?: string[];
    onEscape?: () => void;
    id: string;
    items: JsonStructure;
    backTo?: string;
}

export default function Page(
    {
        searchPrefix,
        items,
        onEscape,
        backTo,
        id,
    }: PageProps) {
    const {page, search, setPage} = useCommandPaletteState(({search, page, setPage}) => ({search, page, setPage}));
    const {setSearchPrefix}       = useContext(PageContext);
    onEscape                      = onEscape || (() => backTo && setPage(backTo));

    const isActive = page === id;

    useEffect(() => {
        if (onEscape && isActive) {
            function handleKeyDown(e: KeyboardEvent) {
                if (e.key === "Escape") {
                    e.preventDefault();
                    e.stopPropagation();
                    onEscape?.();
                } else if (e.key === "Backspace" && !search) {
                    e.preventDefault();
                    e.stopPropagation();
                    onEscape?.();
                }
            }

            document.addEventListener("keydown", handleKeyDown);

            return () => {
                document.removeEventListener("keydown", handleKeyDown);
            };
        }
    }, [
        isActive,
        search
    ]);

    useEffect(() => {
        if (isActive && setSearchPrefix) {
            setSearchPrefix(searchPrefix);
        }
    }, [
        searchPrefix,
        isActive,
        setSearchPrefix
    ]);

    return isActive ? <>{renderJsonStructure(filterItems(items, search))}</> : null;
}
