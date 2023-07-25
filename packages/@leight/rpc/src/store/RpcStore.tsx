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
    bulkRef: MutableRefObject<Record<string, IBulkRef>>;
}>;

export const RpcStore = createStore<IRpcStoreProps>({
    state: ({state}) => () => ({
        ...state,
    }),
    name:  "RpcStore",
    hint:  "Add RpcProvider."
});

export type IRpcProviderProps = PropsWithChildren;

export const RpcProvider: FC<IRpcProviderProps> = props => {
    return <RpcStore.Provider
        state={{
            bulkTimerRef: useRef<NodeJS.Timeout>(),
            bulkRef:      useRef({}),
        }}
        {...props}
    />;
};
