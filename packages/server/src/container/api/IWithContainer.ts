import {IContainer} from "@leight/server";

export interface IWithContainer<TContainer extends IContainer> {
    container: TContainer;

    withContainer(container: TContainer): this;
}
