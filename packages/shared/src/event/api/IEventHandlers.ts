import {
    IBaseEventTypes,
    IEventCallback
} from "@leight/shared";

/**
 * Base interface for any event handlers - it's just marker interface
 * to keep types on track (aligned to what IEvents expects).
 */
export type IEventHandlers<T extends IBaseEventTypes = IBaseEventTypes> = {
    readonly [index in T]: IEventCallback;
};
