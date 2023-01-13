import {PrismaClient} from "@prisma/client";
import "reflect-metadata";
import {
    container,
    instanceCachingFactory
}                     from "tsyringe";

container.register<PrismaClient>("PrismaClient", {
    useFactory: instanceCachingFactory<PrismaClient>(() => {
        return new PrismaClient({
            errorFormat: "pretty",
            log:         ["error"],
        });
    }),
});

export {container} from "tsyringe";
