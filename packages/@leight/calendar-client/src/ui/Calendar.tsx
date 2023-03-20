import {Button}                from "@mantine/core";
import {type FC}               from "react";
import {PrevButton}            from "../button";
import {useCalendarStoreState} from "../context";

export interface ICalendarProps {
}

export const Calendar: FC<ICalendarProps> = () => {
    const {calendar: {months}} = useCalendarStoreState(({calendar}) => ({calendar}));
    return <>
        Calendar here!
        <Button>Cudlik</Button>
        <>
            {months.map(({year, month, weeks}) => (
                <div key={`calendar-${year}-${month}`}>
                    <header>
                        <h1>{month} {year}</h1>
                    </header>
                    <nav>
                        <PrevButton/>
                        <button {...getForwardProps()}>Next</button>
                    </nav>
                    {weeks.map((week) => week.map((day) => <>
                            {day
                                ? <button {...getDayProps({day})}>{day.date.getDate()}</button>
                                : <span/>}
                        </>
                    ))}
                </div>
            ))}
        </>
    </>;
};
