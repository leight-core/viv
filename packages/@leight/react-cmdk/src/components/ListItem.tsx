import React, {
    ButtonHTMLAttributes,
    DetailedHTMLProps,
    FC,
    ReactNode,
    useContext,
}                   from "react";
import {
    OpenContext,
    SelectContext
}                   from "../utils/context";
import {classNames} from "../utils/utils";

export type ListItemType = string;

function getListItemWrapperStyles(selected: boolean, disabled?: boolean) {
    return classNames(
        "command-palette-list-item block w-full text-left px-3.5 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-1 focus:ring-gray-300 focus:outline-none flex items-center space-x-2.5 justify-between",
        selected && !disabled
            ? "bg-gray-200/50 dark:bg-gray-800"
            : "bg-transparent",
        disabled
            ? "cursor-default pointer-events-none opacity-50"
            : "cursor-pointer"
    );
}

interface ListItemBaseProps {
    closeOnSelect?: boolean;
    icon?: FC;
    showType?: boolean;
    disabled?: boolean;
    keywords?: string[];
    index: number;
}

export interface ButtonProps
    extends ListItemBaseProps,
        DetailedHTMLProps<
            ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
        > {
    itemType?: string;
}

export function Button(
    {
        closeOnSelect = true,
        showType = true,
        className,
        children,
        onClick,
        index,
        icon,
        itemType,
        ...rest
    }: ButtonProps) {
    const {selected}     = useContext(SelectContext);
    const {onChangeOpen} = useContext(OpenContext);

    function clickAndClose(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (onClick) {
            onClick(e);
            closeOnSelect && onChangeOpen(false);
        }
    }

    return (
        <button
            {...rest}
            aria-disabled={rest.disabled ?? false}
            data-close-on-select={closeOnSelect}
            onClick={clickAndClose}
            className={classNames(
                getListItemWrapperStyles(selected === index, rest.disabled),
                className
            )}
        >
            <ListItemContent
                type={showType ? (itemType || "Action") : undefined}
                icon={icon}
            >
                {children}
            </ListItemContent>
        </button>
    );
}

interface ListItemContentProps {
    icon?: FC<any>;
    children: ReactNode;
    type?: ListItemType;
}

function ListItemContent(
    {
        icon: ListItemIcon,
        children,
        type,
    }: ListItemContentProps) {
    return (
        <>
            <div className="flex w-full items-center space-x-2.5">
                {ListItemIcon && <ListItemIcon className="w-5 h-5 text-gray-500"/>}
                {typeof children === "string" ? (
                    <span className="truncate max-w-md dark:text-white">{children}</span>
                ) : (
                    children
                )}
            </div>

            {type && <span className="text-gray-500 text-sm">{type}</span>}
        </>
    );
}

export default function ListItem(props: ButtonProps) {
    return <Button {...props} />;
}
