import {IContainer, IContainerCallback, IFileSource, IPrismaTransaction, ISource, IUser} from "@leight-core/api";
import {User} from "../user";

export class ContainerClass<TFileSource extends IFileSource<any, any> = IFileSource<any, any>> implements IContainer<TFileSource> {
	prisma: IPrismaTransaction;
	user: IUser;

	constructor(prisma: IPrismaTransaction, user: IUser) {
		this.prisma = prisma;
		this.user = user;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	useFileSource<T>(callback: IContainerCallback<TFileSource, T>, source?: ISource<any, any, any>): Promise<T> {
		throw new Error("Not supported");
	}

	withPrisma(prisma: IPrismaTransaction): this {
		this.prisma = prisma;
		return this;
	}

	withUser(user: IUser): this {
		this.user = user;
		return this;
	}
}

export const Container = (prisma: IPrismaTransaction, user: IUser = User()) => new ContainerClass(prisma, user);
