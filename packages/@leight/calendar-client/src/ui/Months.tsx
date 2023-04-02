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
import {useMonths}     from "../context";
import {CalendarShell} from "./CalendarShell";

export interface IMonthsProps {
    withControls?: boolean;
}

export const Months: FC<IMonthsProps> = () => {
    const {months: {months, isCurrent, input}, today, prevYear, nextYear} = useMonths();
    const columnCount                                                     = 4;
    const rowCount                                                        = months.length / columnCount;
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
                        <DateInline input={DateTime.now().toJSDate()} options={{day: "numeric", month: "long", year: "numeric"}}/> :
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
                key={`month${row}`}
                columns={columnCount}
                className={classes.row}
                m={0}
            >
                {Array.from({length: columnCount}, (_, column) => {
                    const month = months[(row * columnCount) + column];
                    if (!month) {
                        return null;
                    }
                    return <Grid.Col
                        key={month.id}
                        span={1}
                        className={classNames(
                            classes.cell,
                            classes.monthCell,
                            month.isCurrent ? classes.currentMonth : undefined,
                        )}
                    >
                        {month.name}
                    </Grid.Col>;
                })}
            </Grid>)}
        </>}
    </CalendarShell>;
};
