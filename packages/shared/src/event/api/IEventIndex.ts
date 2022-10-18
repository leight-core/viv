import {
    IBaseEventTypes,
    IEvent
} from "@leight/shared";

export type IEventIndex<TEventTypes extends IBaseEventTypes> = { [index in TEventTypes]: IEvent[] }
