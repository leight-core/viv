import {DateTime}      from "@leight/i18n";
import {DateInline}    from "@leight/i18n-client";
import {classNames}    from "@leight/utils-client";
import {
    ActionIcon,
    Button,
    Grid,
    Group,
    Text
}                      from "@mantine/core";
import {
    IconChevronLeft,
    IconChevronRight,
    IconChevronsLeft,
    IconChevronsRight
}                      from "@tabler/icons-react";
import {type FC}       from "react";
import {useYears}      from "../context";
import {CalendarShell} from "./CalendarShell";

export interface IYearsProps {
    withControls?: boolean;
}

export const Years: FC<IYearsProps> = () => {
    const {years: {years, isCurrent, input}, today, prevYear, nextYear} = useYears();
    const columnCount                                                   = 5;
    const rowCount                                                      = years.length / columnCount;
    return <CalendarShell
        controlsTopLeft={<Group spacing={"sm"}>
            <ActionIcon variant={"subtle"}>
                <IconChevronsLeft/>
            </ActionIcon>
            <Button.Group>
                <Button
                    size={"sm"}
                    variant={"subtle"}
                    onClick={() => prevYear()}
                    leftIcon={<IconChevronLeft/>}
                >
                    <DateInline
                        input={input.minus({year: 1}).toJSDate()}
                        options={{year: "numeric"}}
                    />
                </Button>
            </Button.Group>
        </Group>}
        controlsTopMiddle={<Group spacing={"sm"}>
            <Button
                variant={"subtle"}
                onClick={() => today()}
                disabled={isCurrent}
            >
                <Text c={"dimmed"}>
                    {isCurrent ?
                        <DateInline input={DateTime.now().toJSDate()} options={{day: "numeric", year: "numeric"}}/> :
                        <DateInline input={input.toJSDate()} options={{year: "numeric"}}/>
                    }
                </Text>
            </Button>
        </Group>}
        controlsTopRight={<Group spacing={"sm"}>
            <Button.Group>
                <Button
                    size={"sm"}
                    variant={"subtle"}
                    onClick={() => nextYear()}
                    rightIcon={<IconChevronRight/>}
                >
                    <DateInline
                        input={input.plus({year: 1}).toJSDate()}
                        options={{year: "numeric"}}
                    />
                </Button>
            </Button.Group>
            <ActionIcon variant={"subtle"}>
                <IconChevronsRight/>
            </ActionIcon>
        </Group>}
    >
        {({classes}) => <>
            {Array.from({length: rowCount}, (_, row) => <Grid
                key={`year${row}`}
                columns={columnCount}
                className={classes.row}
                m={0}
            >
                {Array.from({length: columnCount}, (_, column) => {
                    const year = years[(row * columnCount) + column];
                    if (!year) {
                        return null;
                    }
                    return <Grid.Col
                        key={year.id}
                        span={1}
                        className={classNames(
                            classes.cell,
                            classes.yearCell,
                            year.isCurrent ? classes.currentYear : undefined,
                        )}
                    >
                        {year.name}
                    </Grid.Col>;
                })}
            </Grid>)}
        </>}
    </CalendarShell>;
};
