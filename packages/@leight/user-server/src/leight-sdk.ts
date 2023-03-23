import {
    withSdk,
    withServerSourceGenerators
} from "@leight/sdk";

void withSdk(withServerSourceGenerators({
    entity:   "User",
    packages: {
        schema: "@leight/user",
        prisma: "@leight/prisma",
    },
    prisma:   "user",
    disabled: ["trpc-procedure"],
    sourceEx: {
        type:    "UserSourceEx",
        package: "../source",
    },
}));
