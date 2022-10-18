import {IEventCallback} from "@leight/shared";

/**
 * Internal event structure.
 */
export interface IEvent {
    readonly priority: number;
    readonly callback: IEventCallback;
}
