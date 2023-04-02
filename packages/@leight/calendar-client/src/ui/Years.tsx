import {type IYear} from "@leight/i18n";
import {DateInline} from "@leight/i18n-client";
import {classNames} from "@leight/utils-client";
import {
    Button,
    Grid,
    Group,
    Text
}                   from "@mantine/core";
import {
    IconChevronLeft,
    IconChevronRight
}                   from "@tabler/icons-react";
import {
    type FC,
    type PropsWithChildren
}                   from "react";
import {useYears}   from "../context";
import {
    CalendarShell,
    type ICalendarShellProps
}                   from "./CalendarShell";

export type IYearsProps = PropsWithChildren<Omit<ICalendarShellProps, "children" | "onClick"> & {
    onClick?(props: IYearsProps.IOnClickProps): void;
}>;

export namespace IYearsProps {
    export interface IOnClickProps {
        year: IYear;
    }
}

export const Years: FC<IYearsProps> = (
    {
        children,
        onClick,
        ...props
    }) => {
    const {years: {years, isCurrent, input, start, end, columns, rows}, today, prevYear, nextYear} = useYears();
    return <CalendarShell
        controlsTopLeft={<Group spacing={"sm"}>
            <Button.Group>
                <Button
                    size={"sm"}
                    variant={"subtle"}
                    onClick={() => prevYear()}
                    leftIcon={<IconChevronLeft/>}
                >
                    <DateInline
                        input={start.minus({year: 1}).toJSDate()}
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
                    <DateInline input={input.toJSDate()} options={{year: "numeric"}}/>
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
                        input={end.plus({year: 1}).toJSDate()}
                        options={{year: "numeric"}}
                    />
                </Button>
            </Button.Group>
        </Group>}
        {...props}
    >
        {({classes}) => <>
            {Array.from({length: rows}, (_, row) => <Grid
                key={`year${row}`}
                columns={columns}
                className={classes.row}
                m={0}
            >
                {Array.from({length: columns}, (_, column) => {
                    const year = years[(row * columns) + column];
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
                        onClick={() => onClick?.({year})}
                    >
                        {year.name}
                    </Grid.Col>;
                })}
            </Grid>)}
            {children}
        </>}
    </CalendarShell>;
};
