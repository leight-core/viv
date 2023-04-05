import {type ICalendarItems} from "@leight/calendar";
import {createStoreContext}  from "@leight/context-client";
import {type IStoreProps}    from "@leight/zustand";
import {
    type ComponentProps,
    type FC
}                            from "react";

export type ICalendarItemsStoreProps = IStoreProps<{
    items: ICalendarItems,
    withItems(items: ICalendarItems): void;
}>;

export const CalendarItemsStore = createStoreContext<ICalendarItemsStoreProps>({
    state: () => (set) => ({
        items:     {
            events: [],
        },
        withItems: (items) => {
            set({items});
        },
    }),
    name:  "CalendarItemsStore",
    hint:  "Add CalendarItemsProvider",
});

export interface ICalendarItemsProvider extends Omit<ComponentProps<typeof CalendarItemsStore["Provider"]>, "state"> {
    /**
     * Default items.
     */
    items?: ICalendarItems;
}

export const CalendarItemsProvider: FC<ICalendarItemsProvider> = ({items, ...props}) => {
    return <CalendarItemsStore.Provider
        defaults={{items}}
        {...props}
    />;
};
