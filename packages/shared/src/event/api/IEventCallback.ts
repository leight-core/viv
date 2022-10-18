import {IEventResult} from "@leight/shared";

/**
 * A shape of event handler - some arguments and optional boolean return.
 */
export type IEventCallback = (...args: any) => IEventResult;
