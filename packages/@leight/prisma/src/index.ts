export * from './api';
export * from './source';

/**
 * Symbol for container usage of Prisma.
 */
export const $PrismaClient = Symbol.for("@leight/prisma/PrismaClient");
export {PrismaClient as IPrismaClient, Prisma as IPrisma} from '@prisma/client';

export * from '@prisma/client';
