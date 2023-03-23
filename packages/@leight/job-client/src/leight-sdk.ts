import {
    withClientSourceGenerators,
    withSdk
} from "@leight/sdk";

void withSdk(withClientSourceGenerators({
    entity:   "Job",
    packages: {
        schema: "@leight/job",
    },
}));
