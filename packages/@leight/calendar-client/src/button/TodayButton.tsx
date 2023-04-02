import {ActionIcon}          from "@mantine/core";
import {IconCurrentLocation} from "@tabler/icons-react";
import {
    type ComponentProps,
    type FC
}                            from "react";

export interface ITodayButtonProps extends Omit<ComponentProps<typeof ActionIcon>, "children"> {
    isCurrent: boolean;

    onClick(): void;
}

export const TodayButton: FC<ITodayButtonProps> = ({isCurrent, onClick, ...props}) => {
    return isCurrent ? null : <ActionIcon {...props}>
        <IconCurrentLocation
            onClick={() => onClick()}
            {...props}
        />
    </ActionIcon>;
};
