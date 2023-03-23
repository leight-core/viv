import {resolvePackageJson} from "@leight/utils-server";
import {
    generatorEntitySchema,
    generatorSourceApi,
    type IGeneratorEntitySchemaParams,
    type IGeneratorSourceApiParams
}                           from "../generator";

export type IWithSourceGeneratorsProps =
    IGeneratorEntitySchemaParams
    & IGeneratorSourceApiParams
    & {
        packageName?: string;
        sdk?: string;
    }

export const withSourceGenerators = (
    {
        packageName = resolvePackageJson().name,
        sdk = "src/sdk",
        modelName,
        PrismaSchema,
        schemaEx,
        sorts,
        sourceEx,
    }: IWithSourceGeneratorsProps) => {
    if (!packageName) {
        throw new Error("Cannot resolve packageName");
    }

    return [
        async () => generatorEntitySchema({
            packageName,
            name:   "entity-schema",
            file:   `${sdk}/entity-schema.ts`,
            barrel: true,
            params: {
                PrismaSchema,
                modelName,
                sorts,
                schemaEx,
            },
        }),
        async () => generatorSourceApi({
            packageName,
            name:   "source-api",
            file:   `${sdk}/source-api.ts`,
            barrel: true,
            params: {
                modelName,
                sourceEx,
            },
        }),
    ];
};
