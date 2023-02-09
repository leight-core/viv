import {$Container}      from "./Container";
import {type IContainer} from "./IContainer";

export const wrapContainer = (container: IContainer): IContainer => {
    container.register<IContainer>($Container, {
        useValue: container,
    });
    return container;
};
