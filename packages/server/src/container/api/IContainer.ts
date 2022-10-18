import {IPrismaTransaction} from "@leight/server";
import {IUser}              from "@leight/shared";
import {PrismaClient}       from "@prisma/client";

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
