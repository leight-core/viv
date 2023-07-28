import {minMaxOf}          from "@leight/utils";
import {type MantineTheme} from "@mantine/core";

/**
 * Resolves native primary color from Mantine; because typings are a bit crazy,
 * this function just put them away.
 */
export const withPrimaryColor = (theme: MantineTheme, offset = 0): string => {
    return theme.colors[theme.primaryColor]?.[
        minMaxOf({
            value: theme.primaryShade as number + offset,
            max:   9
        })
        ] as string;
};
