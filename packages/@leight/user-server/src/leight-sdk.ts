import {
    withSdk,
    withServerSourceGenerators
} from "@leight/sdk";

void withSdk(withServerSourceGenerators({
    modelName:     "User",
    schemaPackage: "@leight/user",
    prismaPackage: "@leight/prisma",
    prismaModel:   "user",
    disabled:      ["trpc-procedure"],
}));
