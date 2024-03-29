import {withSourceFile}  from "@leight/generator-server";
import {normalize}       from "node:path";
import {type IGenerator} from "../../api";

export interface IWithRepositoryExParams {
    repositories: IWithRepositoryExParams.IRepository[];
}

export namespace IWithRepositoryExParams {
    export interface IRepository {
        /**
         * Base name exported (used to name all exported objects)
         */
        name: string;
        /**
         * Required package imports
         */
        packages: IPackages;
    }

    export interface IPackages {
        /**
         * Prisma package which exports PrismaClient.
         */
        prisma: string;
    }
}

/**
 * Generates Query stuff bound to Prisma schemas.
 */
export const withRepositoryEx: IGenerator<IWithRepositoryExParams> = async (
    {
        barrel,
        directory,
        params: {repositories},
    }) => {
    for (const {
        name,
        packages
    } of repositories) {
        console.log(`- Generating [withRepositoryEx] [${name}]`);

        withSourceFile()
            .withImports({
                imports: {
                    "@leight/source":  [
                        "type IRepositorySchemaEx",
                    ],
                    [packages.prisma]: [
                        `${name}WhereInputSchema`,
                        `${name}WhereUniqueInputSchema`,
                        `${name}OrderByWithRelationInputSchema`,
                    ],
                },
            })
            .withConsts({
                exports: {
                    [`${name}RepositorySchemaEx`]: {
                        type: `I${name}RepositoryExSchema`,
                        body: `{
    WhereSchema:       ${name}WhereInputSchema,
    WhereUniqueSchema: ${name}WhereUniqueInputSchema,
    OrderBySchema:     ${name}OrderByWithRelationInputSchema,
}
                    `
                    },
                },
            })
            .withTypes({
                exports: {
                    [`I${name}RepositorySchemaEx`]: `IRepositorySchemaEx<
    typeof ${name}WhereInputSchema,
    typeof ${name}WhereUniqueInputSchema,
    typeof ${name}OrderByWithRelationInputSchema
>`,
                    [`I${name}RepositoryExType`]:   `I${name}RepositorySchemaEx["Type"]`,
                    [`I${name}RepositoryExSchema`]: `I${name}RepositorySchemaEx["Schema"]`,
                },
            })
            .saveTo({
                file: normalize(`${directory}/schema/${name}RepositorySchemaEx.ts`),
                barrel,
            });
    }
};
