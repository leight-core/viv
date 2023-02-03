import {type IContainer} from "./IContainer";

/**
 * Helper class for mounting container, symbol to a type.
 */
export class ServiceContext<T> {
    constructor(protected container: IContainer, private symbol: any) {
    }

    resolve(): T {
        return this.container.resolve<T>(this.symbol);
    }
}
