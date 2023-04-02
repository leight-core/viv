import {type DateTime} from "@leight/i18n";
import {DateInline}    from "@leight/i18n-client";
import {
    ActionIcon,
    Box,
    Button,
    Overlay
}                      from "@mantine/core";
import {
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
            controlsBottomMiddle={<Button.Group>
                <Button
                    variant={"subtle"}
                    onClick={() => {
                        setSelectMonth(true);
                        monthsOf(weeks.input);
                    }}
                    leftIcon={<IconCalendarSearch/>}
                >
                    <DateInline input={weeks.input.toJSDate()} options={{month: "long"}}/>
                </Button>
                <Button
                    variant={"subtle"}
                    onClick={() => {
                        setSelectYear(true);
                        yearsOf(weeks.input);
                    }}
                    leftIcon={<IconCalendarSearch/>}
                >
                    <DateInline input={weeks.input.toJSDate()} options={{year: "numeric"}}/>
                </Button>
            </Button.Group>}
        >
            {selectMonth && <Overlay color={"#FFF"} opacity={1}>
                <Months
                    onClick={({month: {month}}) => {
                        weeksOf(month);
                        setSelectMonth(false);
                    }}
                    controlsBottomMiddle={<ActionIcon
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
                    controlsBottomMiddle={<ActionIcon
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
