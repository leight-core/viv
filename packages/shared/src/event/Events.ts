import {
    IBaseEventTypes,
    IEvent,
    IEventHandlers,
    IEventIndex,
    IEvents
} from "@leight/viv";

/**
 * Simple EventBus implementation intended to be used locally on call site near to the execution site (thus not application-wide).
 */
export function Events<TEventTypes extends IBaseEventTypes, TEventHandlers extends IEventHandlers<TEventTypes>>(): IEvents<TEventTypes, TEventHandlers> {
    return new EventsClass();
}

class EventsClass<TEventTypes extends IBaseEventTypes, TEventHandlers extends IEventHandlers<TEventTypes>> implements IEvents<TEventTypes, TEventHandlers> {
    events: IEventIndex<TEventTypes>              = {} as any;
    chains: IEvents<any, any>[]                   = [];
    binds: { [index: string]: IEvents<any, any> } = {};
    requires: TEventTypes[]                       = [];
    dismissed                                     = false;

    on<T extends TEventTypes>(event: T, callback: TEventHandlers[T], priority = 100): IEvents<TEventTypes, TEventHandlers> {
        (this.events[event] = this.events[event] || []).push({
            priority,
            callback,
        });
        return this;
    }

    handler<T extends TEventTypes>(event: T): TEventHandlers[T] {
        if (this.dismissed) {
            console.debug(`Calling event [${event}] on dismissed Events.`);
            return (() => {
            }) as any;
        }
        const handlers = [this].concat(this.chains as any).concat(Object.values(this.binds as any))
            .reduce((array, item) => array.concat(item.events[event] || []), [] as IEvent[])
            .sort((a, b) => a.priority - b.priority);
        if (this.requires.filter(name => event === name).length > 0 && !handlers.length) {
            throw new Error(`Missing required Event handler [${event}].`);
        }
        return ((...args: any) => {
            handlers.find(item => !this.dismissed && item.callback(...args) === false);
        }) as any;
    }

    dismiss(dismiss = true): IEvents<TEventTypes, TEventHandlers> {
        this.dismissed = dismiss;
        return this;
    }

    required(...events: TEventTypes[]): IEvents<TEventTypes, TEventHandlers> {
        this.requires.push(...events);
        return this;
    }

    chain(events?: IEvents<any, any>): IEvents<TEventTypes, TEventHandlers> {
        events && this.chains.push(events);
        return this;
    }

    bind(name: string, events: IEvents<any, any>): IEvents<any, any> {
        this.binds[name] = events;
        return events;
    }

    cleaner() {
        return () => {
            this.handler("dismiss" as any)();
            this.dismiss();
        };
    }
}
