import {
    createStore,
    type IStoreProps,
    type IStorePropsType
}                      from "@leight/store";
import {
    type FC,
    type MutableRefObject,
    type PropsWithChildren,
    useRef
}                      from "react";
import {type IBulkRef} from "../api/IBulkRef";

export type IRpcStoreProps = IStoreProps<IStorePropsType, {
    bulkTimerRef: MutableRefObject<NodeJS.Timeout | undefined>;
    timeoutRef: MutableRefObject<NodeJS.Timeout | undefined>;
    bulkRef: MutableRefObject<Record<string, IBulkRef>>;
    url: string;
}>;

export const RpcStore = createStore<IRpcStoreProps>({
    state: ({state}) => () => ({
        ...state,
    }),
    name:  "RpcStore",
    hint:  "Add RpcProvider."
});

export type IRpcProviderProps = PropsWithChildren<{
    url?: string;
}>;

export const RpcProvider: FC<IRpcProviderProps> = (
    {
        url = process.env.NEXT_PUBLIC_RPC || "/api/rpc",
        ...props
    }) => {
    return <RpcStore.Provider
        state={{
            bulkTimerRef: useRef<NodeJS.Timeout>(),
            timeoutRef:   useRef<NodeJS.Timeout>(),
            bulkRef:      useRef({}),
            url,
        }}
        {...props}
    />;
};
