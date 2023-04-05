import {type IDay}  from "@leight/calendar";
import {
    Calendar,
    CalendarItemsProvider,
    CalendarProvider,
    type ICalendarProps
}                   from "@leight/calendar-client";
import {DateTime}   from "@leight/i18n";
import {DateInline} from "@leight/i18n-client";
import {
    BlockProvider,
    BlockStore
}                   from "@leight/utils-client";
import {
    type FC,
    useEffect,
    useState
}                   from "react";

export interface IAdvancedCalendarProps extends ICalendarProps {
}

export const AdvancedCalendar: FC<IAdvancedCalendarProps> = (props) => {
    /**
     * You can control the loading state of a Calendar by using optional
     * BlockProvider.
     */
    return <BlockProvider
        /**
         * blocked by default (for example, when you expect loading)
         */
        isBlock
    >
        <CalendarItemsProvider
            items={{
                events: [
                    {
                        date: DateTime.now().minus({day: 5}),
                        data: {
                            foo: "1234",
                        }
                    },
                    {
                        date: DateTime.now().plus({day: 4}),
                        data: {
                            bar: "12344",
                        },
                    },
                    {
                        date: DateTime.now().plus({day: 4}),
                        data: {
                            bar: "another bar",
                        },
                    },
                ],
            }}
        >
            <CalendarProvider
                /**
                 * You can pass input here or through the props; input is DateTime from Luxon
                 */
                date={DateTime.fromObject({month: 2, day: 12})}
            >
                <CalendarInternal {...props}/>
            </CalendarProvider>
        </CalendarItemsProvider>
    </BlockProvider>;
};

interface ICalendarInternalProps extends IAdvancedCalendarProps {
}

const CalendarInternal: FC<ICalendarInternalProps> = (props) => {
    /**
     * This is just an example how to use (control) loading state of
     * a Calendar.
     */
    const {unblock}     = BlockStore.useState(({unblock}) => ({unblock}));
    const [day, setDay] = useState<IDay>();
    useEffect(() => {
        setTimeout(() => {
            unblock();
        }, 750);
    }, []);
    return <>
        <Calendar
            onClick={({day}) => setDay(day)}
            {...props}
        />
        <div>selected date: {day ? <DateInline date={day.day}/> : "- click the calendar -"}</div>
    </>;
};
