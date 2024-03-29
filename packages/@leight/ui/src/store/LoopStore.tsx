import {
    createStore,
    type IStoreProps
} from "@leight/store";
import {
    type FC,
    type PropsWithChildren
} from "react";

export type ILoopStoreProps = IStoreProps<{
    isRunning: boolean;
    isDone: boolean;
    isError: boolean;
    isSuccess?: boolean;
    current: number;
    total: number;

    progress(): void;

    start(total: number): void;

    finish(withError?: boolean): void;

    error(error?: boolean): void;

    percent(): number;
}>

export const LoopStore = createStore<ILoopStoreProps>({
    state: () => (set, get) => ({
        total:     0,
        isRunning: false,
        isDone:    false,
        isError:   false,
        isSuccess: false,
        current:   0,
        progress:  () => set(({current}) => ({current: current + 1})),
        start:     (total) => set({
            isRunning: true,
            total
        }),
        finish:    (withError = false) =>
                       set({
                           isDone:    true,
                           isRunning: false,
                           isError:   withError,
                           isSuccess: !withError,
                       }),
        error:     (isError = true) => set({
            isError,
            isSuccess: !isError
        }),
        percent:   () => {
            const {
                current,
                total
            } = get();
            return (100 * current) / total;
        },
    }),
    name:  "LoopStore",
    hint:  "Add LoopProvider."
});

export type ILoopProviderProps = PropsWithChildren;

export const LoopProvider: FC<ILoopProviderProps> = props => {
    return <LoopStore.Provider
        {...props}
    />;
};
