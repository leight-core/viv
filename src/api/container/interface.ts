import {
	IFileSource,
	IPrismaTransaction,
	IUser
}                     from "@leight-core/api";
import {PrismaClient} from "@prisma/client";

/**
 * Callback used to obtain a service from a Container.
 */
export type IContainerCallback<TService, T> = (service: TService) => Promise<T>;

export interface IContainer {
	user: IUser;
	prisma: IPrismaTransaction;

	/**
	 * Set current user used in this container.
	 */
	withUser(user: IUser): this;

	/**
	 * Set current prisma client.
	 */
	withPrisma(prisma: PrismaClient): this;
}

export interface IServiceContainer<//
	TFileSource extends IFileSource<IContainer, any, any> = IFileSource<IContainer, any, any>,
	> extends IContainer {
	useFileSource<T>(callback: IContainerCallback<TFileSource, T>): Promise<T>;
}

export interface IWithContainer<TContainer extends IContainer> {
	container: TContainer;

	withContainer(container: TContainer): this;
}
