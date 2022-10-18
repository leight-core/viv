/**
 * Callback used to obtain a service from a Container.
 */
export type IContainerCallback<TService, T> = (service: TService) => Promise<T>;
