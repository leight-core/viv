import type {GlobalProvider} from "@ladle/react";
import {Shell}               from "@leight/mantine";

export const Provider: GlobalProvider = (
    {
        children,
    }) => (
    <Shell>
        {children}
    </Shell>
);

