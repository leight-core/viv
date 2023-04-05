import {createStoreContext} from "@leight/context-client";
import {
    DateTime,
    type IYears,
    yearsOf
}                           from "@leight/i18n";
import {type IStoreProps}   from "@leight/zustand";
import {
    type ComponentProps,
    type FC
}                           from "react";

export type IYearsStoreStoreProps = IStoreProps<{
    /**
     * Set years of the given date
     */
    yearsOf(input: DateTime): void;
    /**
     * Move to the current year
     */
    today(): void;
    prevYear(): void;
    nextYear(): void;
    prevYears(): void;
    nextYears(): void;
}, {
    /**
     * Calendar is computed based on an input, so it cannot be required
     * in the time of store creation.
     */
    readonly years: IYears;
}>

export const {
                 Provider: YearsStoreProvider,
                 useState: useYears,
             } = createStoreContext<IYearsStoreStoreProps>({
    state: ({state}) => (set) => ({
        yearsOf(input: DateTime) {
            set({
                years: yearsOf({input}),
            });
        },
        today() {
            set({
                years: yearsOf({input: DateTime.now()}),
            });
        },
        prevYear() {
            set(({years: {input}}) => ({
                years: yearsOf({input: input.minus({year: 1})}),
            }));
        },
        nextYear() {
            set(({years: {input}}) => ({
                years: yearsOf({input: input.plus({year: 1})}),
            }));
        },
        prevYears() {
            set(({years: {count, input}}) => ({
                years: yearsOf({input: input.minus({year: count})}),
            }));
        },
        nextYears() {
            set(({years: {count, input}}) => ({
                years: yearsOf({input: input.plus({year: count})}),
            }));
        },
        ...state,
    }),
    name:  "YearsContext",
    hint:  "Add CalendarProvider or YearsProvider.",
});

export interface IYearsProviderProps extends Omit<ComponentProps<typeof YearsStoreProvider>, "state"> {
    input?: DateTime;
}

export const YearsProvider: FC<IYearsProviderProps> = ({input, ...props}) => {
    return <YearsStoreProvider
        state={{
            years: yearsOf({input}),
        }}
        {...props}
    />;
};
