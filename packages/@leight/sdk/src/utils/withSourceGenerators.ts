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
        entity,
        packages,
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
            folder: `${sdk}/entity-schema.ts`,
            barrel: true,
            params: {
                packages,
                entity,
                sorts,
                schemaEx,
            },
        }),
        async () => generatorSourceApi({
            packageName,
            folder: `${sdk}/source-api.ts`,
            barrel: true,
            params: {
                entity,
                sourceEx,
            },
        }),
    ];
};
