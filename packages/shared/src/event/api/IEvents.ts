import {
    IBaseEventTypes,
    IEventHandlers
} from "@leight/shared";

/**
 * Simple EventBus nicely typed to keep all the things in the right way.
 */
export interface IEvents<TEventTypes extends IBaseEventTypes, TEventHandlers extends IEventHandlers> {
    /**
     * Registers a handler of the given event name.
     */
    on<T extends TEventTypes>(event: T, callback: TEventHandlers[T], priority?: number): IEvents<TEventTypes, TEventHandlers>;

    /**
     * Returns the handler of an event.
     */
    handler<T extends TEventTypes>(event: T): TEventHandlers[T];

    /**
     * Dismiss this event bus and disable all events (thus handler calls do nothing).
     *
     * Defaults to true.
     */
    dismiss(dismiss?: boolean): IEvents<TEventTypes, TEventHandlers>;

    /**
     * Set required event handlers; when required event is called, but handler not present, an error is thrown.
     *
     * @param events
     */
    required(...events: TEventTypes[]): IEvents<TEventTypes, TEventHandlers>;

    /**
     * Chain with the given events (events still respects event handler priority).
     *
     * @param events
     *
     * @return Events instance chain method was called on.
     */
    chain(events?: IEvents<any, any>): IEvents<TEventTypes, TEventHandlers>;

    /**
     * Like a chain, but with the name: when used same name, the previous events are replaced. Useful if there is need for
     * some kind of "local" events (originally used for WizardStep).
     *
     * Returns input events for convenience (as it's expected to pass them somewhere else).
     */
    bind(name: string, events: IEvents<any, any>): IEvents<any, any>;

    /**
     * Function useful for hooks - return back cleaner callback for this events.
     */
    cleaner(): () => void;
}
