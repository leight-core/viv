"use client";

import {Text} from "@mantine/core";
import {
    type ComponentProps,
    type FC
}             from "react";

export const DimmedText: FC<ComponentProps<typeof Text<"div">>> = props => {
    return <Text c={"dimmed"} {...props}/>;
};
