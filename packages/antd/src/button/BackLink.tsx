import {
    BackIcon,
    Translate
}                  from "@leight/ui";
import {Button}    from "antd";
import {useRouter} from "next/router";
import {
    ComponentProps,
    FC
}                  from "react";

export interface IBackLinkProps extends Partial<ComponentProps<typeof Button>> {
    /**
     * Text on the button, goes through translation.
     */
    label?: string;
}

/**
 * Just a simple back button using react-router under hood to navigate one history entry back.
 *
 * Props are passed to underlying Button.
 *
 * See:
 *
 * - https://ant.design/components/button/
 */
export const BackLink: FC<IBackLinkProps> = (
    {
        label,
        ...props
    }) => {
    const router = useRouter();
    return <Button
        type={"link"}
        size={"small"}
        icon={<BackIcon/>}
        onClick={() => router.back()}
        {...props}
    >
        <Translate text={label}/>
    </Button>;
};
