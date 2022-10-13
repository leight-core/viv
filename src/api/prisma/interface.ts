import {PrismaClient} from "@prisma/client";

export type IPrismaTransaction = Omit<PrismaClient, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">;
