import {resolvePackageJson} from "@leight/utils-server";
import {
    generatorServerSource,
    type IGeneratorServerSourceParams
}                           from "../generator";

export type IWithServerSourceGeneratorsProps =
    IGeneratorServerSourceParams
    & {
        packageName?: string;
        sdk?: string;
    }

export const withServerSourceGenerators = (
    {
        packageName = resolvePackageJson().name,
        sdk = "src/sdk",
        entity,
        packages,
        prisma,
        disabled,
        sourceEx,
    }: IWithServerSourceGeneratorsProps) => {
    if (!packageName) {
        throw new Error("Cannot resolve packageName");
    }
    return [
        async () => generatorServerSource({
            packageName,
            barrel: true,
            folder: `${sdk}/server-source.tsx`,
            params: {
                entity,
                packages,
                prisma,
                disabled,
                sourceEx,
            }
        }),
    ];
};
