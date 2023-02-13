import React, {useContext}     from "react";
import {Search}                from "tabler-icons-react";
import {SearchContext}         from "../utils/context";
import ListItem, {ButtonProps} from "./ListItem";

interface FreeSearchActionProps extends Omit<ButtonProps, "index"> {
    index?: number;
    label?: string;
}

export default function FreeSearchAction(
    {
        label = "Search for",
        ...props
    }: FreeSearchActionProps) {
    const {search} = useContext(SearchContext);

    return (
        <ListItem index={0} icon={Search} showType={false} {...props}>
            <span className="max-w-md truncate dark:text-white">
            {label} <span className="font-semibold">"{search}"</span>
            </span>
        </ListItem>
    );
}
