import {
    withSdk,
    withSourceGenerators
} from "@leight/sdk";

void withSdk(withSourceGenerators({
    modelName:    "User",
    PrismaSchema: "@leight/prisma",
}));
