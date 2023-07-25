import {minMaxOf}          from "@leight/utils";
import {type MantineTheme} from "@mantine/core";

/**
 * Automatically makes "secondary" color of primary color visible; it can be used for
 * example for texts and so on.
 */
export const withSecondaryPrimaryColor = (theme: MantineTheme, offset = 0): string => {
    return theme.colors[theme.primaryColor]?.[
        minMaxOf({
            value: theme.primaryShade as number + offset,
            max:   9
        }) >= 5 ?
            0 :
            9
        ] as string;
};
