import {
    withClientSourceGenerators,
    withSdk
} from "@leight/sdk";

void withSdk(withClientSourceGenerators({
    entity:   "File",
    packages: {
        schema: "@leight/file",
    },
}));