import React, {useContext} from "react";
import {SearchContext}     from "../utils/context";
import ListItem, {
    ButtonProps,
    LinkProps
}                          from "./ListItem";

interface FreeSearchActionProps extends Omit<ButtonProps & LinkProps, "index"> {
    index?: number;
    label?: string;
}

export default function FreeSearchAction({
                                             label = "Search for",
                                             ...props
                                         }: FreeSearchActionProps) {
    const {search} = useContext(SearchContext);

    return (
        <ListItem index={0} icon="MagnifyingGlassIcon" showType={false} {...props}>
      <span className="max-w-md truncate dark:text-white">
        {label} <span className="font-semibold">"{search}"</span>
      </span>
        </ListItem>
    );
}
