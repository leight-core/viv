import {resolvePackageJson} from "@leight/utils-server";
import {
    generatorClientContext,
    generatorClientSource,
    type IGeneratorClientContextParams,
    type IGeneratorClientSourceParams
}                           from "../generator";

export type IWithClientSourceGeneratorsProps =
    IGeneratorClientContextParams
    &
    IGeneratorClientSourceParams
    & {
        packageName?: string;
        sdk?: string;
    }

export const withClientSourceGenerators = (
    {
        packageName = resolvePackageJson().name,
        sdk = "src/sdk",
        packages,
        trpc,
        entity,
    }: IWithClientSourceGeneratorsProps) => {
    if (!packageName) {
        throw new Error("Cannot resolve packageName");
    }
    return [
        async () => generatorClientContext({
            packageName,
            folder: `${sdk}/client-context.ts`,
            barrel: true,
            params: {
                entity,
                packages,
            },
        }),
        async () => generatorClientSource({
            packageName,
            barrel: true,
            folder: `${sdk}/client-source.tsx`,
            params: {
                entity,
                trpc,
                packages,
            }
        }),
    ];
};
