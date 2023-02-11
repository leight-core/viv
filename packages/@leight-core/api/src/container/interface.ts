/**
 * Callback used to obtain a service from a Container.
 */
export type IContainerCallback<TService, T> = (service: TService) => Promise<T>;

export interface IContainer {
}

export interface IWithContainer<TContainer extends IContainer> {
	container: TContainer;

	withContainer(container: TContainer): this;
}
