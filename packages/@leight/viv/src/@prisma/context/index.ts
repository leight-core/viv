import {type PrismaClient} from "@prisma/client";
import {
    type IContainer,
    ServiceContext
}                          from "../../container";
import {$PrismaClient}     from "../index";

export const PrismaServiceContext = (container: IContainer) => new ServiceContext<PrismaClient>(container, $PrismaClient);
