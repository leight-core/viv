import {
    createStoreContext,
    type IStoreProps
} from "@leight/context-client";
import {
    ComponentProps,
    FC
} from "react";

export type ILoopsStoreProps = IStoreProps<{
    readonly isRunning: boolean;
    readonly current: number;

    inc(): void;

    dec(): void;
}>

export const LoopsStore = createStoreContext<ILoopsStoreProps>({
    state: () => (set, get) => ({
        get isRunning() {
            return get().current > 0;
        },
        current: 0,
        inc:     () => set(({current}) => ({current: current + 1})),
        dec:     () => set(({current}) => ({current: current - 1})),
    }),
    name:  "LoopsStore",
    hint:  "Add LoopsProvider."
});

export interface ILoopsProviderProps extends Omit<ComponentProps<typeof LoopsStore["Provider"]>, "state"> {
}

export const LoopsProvider: FC<ILoopsProviderProps> = props => {
    return <LoopsStore.Provider
        {...props}
    />;
};
