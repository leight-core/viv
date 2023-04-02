import {type DateTime} from "@leight/i18n";
import {
    ActionIcon,
    Box,
    Group,
    Overlay
}                      from "@mantine/core";
import {
    IconCalendarQuestion,
    IconCalendarSearch,
    IconX
}                      from "@tabler/icons-react";
import {
    type FC,
    useState
}                      from "react";
import {
    CalendarProvider,
    useMonths,
    useWeeks,
    useYears
}                      from "../context";
import {Months}        from "./Months";
import {Weeks}         from "./Weeks";
import {Years}         from "./Years";

export interface ICalendarProps {
    withControls?: boolean;
    input?: DateTime;
}

export const Calendar: FC<ICalendarProps> = ({input, ...props}) => {
    return <CalendarProvider
        input={input}
    >
        <CalendarInternal {...props}/>
    </CalendarProvider>;
};

const CalendarInternal: FC<Omit<ICalendarProps, "input">> = ({withControls}) => {
    const {weeksOf, weeks}              = useWeeks(({weeksOf, weeks}) => ({weeksOf, weeks}));
    const {monthsOf}                    = useMonths(({monthsOf}) => ({monthsOf}));
    const {yearsOf}                     = useYears(({yearsOf}) => ({yearsOf}));
    const [selectMonth, setSelectMonth] = useState(false);
    const [selectYear, setSelectYear]   = useState(false);
    return <Box pos={"relative"}>
        <Weeks
            withControls={withControls}
            controlsBottomRight={<Group>
                <ActionIcon
                    onClick={() => {
                        setSelectMonth(true);
                        monthsOf(weeks.input);
                    }}
                >
                    <IconCalendarQuestion/>
                </ActionIcon>
                <ActionIcon
                    onClick={() => {
                        setSelectYear(true);
                        yearsOf(weeks.input);
                    }}
                >
                    <IconCalendarSearch/>
                </ActionIcon>
            </Group>}
        >
            {selectMonth && <Overlay color={"#FFF"} opacity={1}>
                <Months
                    onClick={({month: {month}}) => {
                        weeksOf(month);
                        setSelectMonth(false);
                    }}
                    controlsBottomRight={<ActionIcon
                        variant={"subtle"}
                        onClick={() => setSelectMonth(false)}
                    >
                        <IconX/>
                    </ActionIcon>}
                />
            </Overlay>}
            {selectYear && <Overlay color={"#FFF"} opacity={1}>
                <Years
                    onClick={({year: {year}}) => {
                        weeksOf(year);
                        setSelectYear(false);
                    }}
                    controlsBottomRight={<ActionIcon
                        variant={"subtle"}
                        onClick={() => setSelectYear(false)}
                    >
                        <IconX/>
                    </ActionIcon>}
                />
            </Overlay>}
        </Weeks>
    </Box>;
};
