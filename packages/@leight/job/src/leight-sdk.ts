import {
    withSdk,
    withSourceGenerators
} from "@leight/sdk";

void withSdk(withSourceGenerators({
    entity:   "Job",
    packages: {
        prisma: "@leight/prisma",
    },
    sorts:    [
        "started",
    ],
    schemaEx: {
        entity: {
            type:    "JobSchemaOverride",
            package: "../schema",
        }
    }
}));
