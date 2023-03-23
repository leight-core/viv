import {
    withSdk,
    withSourceGenerators
} from "@leight/sdk";

void withSdk(withSourceGenerators({
    modelName:    "User",
    PrismaSchema: "@leight/prisma",
    sourceEx:     {
        extends: [
            {type: "IUserSourceEx", package: "../api"},
        ],
    },
}));
