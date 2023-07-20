import {
    createStore,
    type IStoreProps
}                             from "@leight/store";
import {
    type FC,
    type MutableRefObject,
    type PropsWithChildren,
    useRef
}                             from "react";
import {type IBulkRef}        from "../api/IBulkRef";
import {type IRpcBulkRequest} from "../schema/RpcBulkRequestSchema";

export type IRpcStoreProps = IStoreProps<{
    /**
     * When a bulk is processed (so we got response from a server or whatever place),
     * commit bulk, thus all promises and so will be processed.
     */
    commit(): void;
}, {
    bulkTimerRef: MutableRefObject<NodeJS.Timeout | undefined>;
    requestRef: MutableRefObject<IRpcBulkRequest>;
    bulkRef: MutableRefObject<Record<string, IBulkRef>>;
}>;

export const RpcStore = createStore<IRpcStoreProps>({
    state: ({
                state,
            }) => (set, get) => ({
        commit() {
            get().requestRef.current = {bulk: {}};
        },
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
            requestRef:   useRef({bulk: {}}),
            bulkRef:      useRef({}),
        }}
        {...props}
    />;
};
