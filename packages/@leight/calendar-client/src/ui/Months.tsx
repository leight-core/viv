import {
    Breadcrumbs,
    Grid,
    Group,
    Tooltip
}                from "@mantine/core";
import {
    IconChartDonut2,
    IconCurrentLocation
}                from "@tabler/icons-react";
import {type FC} from "react";

export interface IMonthsProps {
}

export const Months: FC<IMonthsProps> = () => {
    return <Grid
        columns={controlColumnCount}
        className={classNames(
            classes.controls,
            classes.controlPrefix,
        )}
        m={0}
    >
        <Grid.Col
            span={controlWidth}
            className={"left"}
        >
            <Breadcrumbs
                separator={"→"}
                className={"secondary"}
            >
                <DateInline input={start.toJSDate()} options={{day: "numeric", month: "numeric"}}/>
                <DateInline input={end.toJSDate()}/>
            </Breadcrumbs>
        </Grid.Col>
        <Grid.Col
            span={controlColumnCount - (controlWidth * 2)}
            className={"middle"}
            onClick={() => prevMonth()}
        />
        <Grid.Col
            span={controlWidth}
            className={"right"}
        >
            <Group spacing={"sm"}>
                {!isCurrent && <Tooltip label={t("calendar.today.icon.tooltip", "Today")}>
                    <IconCurrentLocation
                        className={"icon"}
                        onClick={() => today()}
                    />
                </Tooltip>}
                <Tooltip label={t("calendar.select-month.icon.tooltip", "Select month")}>
                    <IconChartDonut2
                        className={"icon"}
                        onClick={() => setIsSelectMonth(select => !select)}
                    />
                </Tooltip>
            </Group>
        </Grid.Col>
    </Grid>;
};
