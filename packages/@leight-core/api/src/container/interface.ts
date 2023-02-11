import {type IFileSource}        from "../file";
import {type IPrismaTransaction} from "../prisma";
import {type ISource}            from "../source";
import {type IUser}              from "../user";

/**
 * Callback used to obtain a service from a Container.
 */
export type IContainerCallback<TService, T> = (service: TService) => Promise<T>;

export interface IContainer<TFileSource extends IFileSource<any, any> = IFileSource<any, any>> {
	user: IUser;
	prisma: IPrismaTransaction;

	/**
	 * Set current user used in this container.
	 */
	withUser(user: IUser): this;

	/**
	 * Set current prisma (for example when in a transaction).
	 */
	withPrisma(prisma: IPrismaTransaction): this;

	useFileSource<T>(callback: IContainerCallback<TFileSource, T>, source?: ISource<any, any, any>): Promise<T>;
}

export interface IWithContainer<TContainer extends IContainer<any>> {
	container: TContainer;

	withContainer(container: TContainer): this;
}
