import {
    $Container,
    type IContainer
} from "@leight/container";
import {
    type ClassValue,
    type FactoryValue,
    PumpIt
} from "pumpit";

export class Container implements IContainer {
    constructor(
        protected container: PumpIt
    ) {
    }

    public unbind(key: IContainer.Key): void {
        try {
            this.container.unbind(key);
        } catch (e) {
            // noop
        }
    }

    public bindClass<T extends ClassValue>(key: IContainer.Key, value: T, options?: IContainer.Options.Class<T>): IContainer {
        this.unbind(key);
        this.container.bindClass(key, value, options);
        return this;
    }

    public bindFactory<T extends FactoryValue>(key: IContainer.Key, value: T, options?: IContainer.Options.Factory<T>): IContainer {
        this.unbind(key);
        this.container.bindFactory(key, value, options);
        return this;
    }

    public bindValue<T>(key: IContainer.Key, value: T): IContainer {
        this.unbind(key);
        this.container.bindValue(key, value);
        return this;
    }

    public child(): IContainer {
        return Container.create(this.container.child());
    }

    public resolve<T>(key: IContainer.Key): T {
        return this.container.resolve(key);
    }

    static create(container?: PumpIt): IContainer {
        const $container = new Container(container || new PumpIt());
        $container.bindValue($Container, $container);
        return $container;
    }
}
