import {
    withSdk,
    withSourceGenerators
} from "@leight/sdk";

void withSdk(withSourceGenerators({
    entity:   "User",
    packages: {
        prisma: "@leight/prisma",
    },
    sourceEx: {
        extends: [
            {type: "IUserSourceEx", package: "../api"},
        ],
    },
}));
