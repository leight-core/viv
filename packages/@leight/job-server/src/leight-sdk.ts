import {
    withSdk,
    withServerSourceGenerators
} from "@leight/sdk";

void withSdk(withServerSourceGenerators({
    entity:   "Job",
    packages: {
        schema: "@leight/job",
        prisma: "@leight/prisma",
    },
    prisma:   "job",
}));
