import {useTranslation}      from "@leight/i18n-client";
import {Tooltip}             from "@mantine/core";
import {IconCurrentLocation} from "@tabler/icons-react";
import {type FC}             from "react";

export interface ITodayButtonProps {
    isCurrent: boolean;

    onClick(): void;
}

export const TodayButton: FC<ITodayButtonProps> = ({isCurrent, onClick}) => {
    const {t} = useTranslation("calendar");
    return isCurrent ? null : <Tooltip label={t("calendar.today.icon.tooltip", "Today")}>
        <IconCurrentLocation
            className={"icon"}
            onClick={() => onClick()}
        />
    </Tooltip>;
};
