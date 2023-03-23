import {
    withSdk,
    withSourceGenerators
} from "@leight/sdk";

void withSdk(withSourceGenerators({
    entity:   "File",
    packages: {
        prisma: "@leight/prisma",
    },
}));
