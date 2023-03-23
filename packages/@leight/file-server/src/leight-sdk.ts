import {
    withSdk,
    withServerSourceGenerators
} from "@leight/sdk";

void withSdk(withServerSourceGenerators({
    entity:   "File",
    packages: {
        schema: "@leight/file",
        prisma: "@leight/prisma",
    },
    prisma:   "file",
}));
