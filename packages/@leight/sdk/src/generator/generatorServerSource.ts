import {withSourceFile}  from "@leight/generator-server";
import {normalize}       from "node:path";
import {type IGenerator} from "../api";

export interface IGeneratorServerSourceParams {
    /**
     * Package used to import schema (usually generated by the leight sdk)
     */
    schemaPackage: string;
    modelName: string;
    /**
     * Package exporting `type PrismaClient`
     */
    prismaPackage: string;
    /**
     * Prisma repository (prismaClient.${prismaModel})
     */
    prismaModel: string;
    disabled?: ("trpc-procedure")[];
}

export const generatorServerSource: IGenerator<IGeneratorServerSourceParams> = async (
    {
        barrel,
        file,
        params: {
                    schemaPackage,
                    modelName,
                    prismaPackage,
                    prismaModel,
                    disabled = [],
                },
    }) => {
    withSourceFile()
        .withImports({
            imports: {
                "@leight/container":     [
                    "type IContainer",
                    "ServiceContext",
                ],
                "@leight/query":         [
                    "withCursor",
                ],
                "@leight/prisma":        [
                    "$PrismaClient",
                ],
                "@leight/source":        [
                    "type ISource",
                    "withUpsert",
                ],
                "@leight/source-server": [
                    "AbstractSource",
                ],
            },
        })
        .withImports(!disabled.includes("trpc-procedure") ? {
            imports: {
                "@leight/trpc-source-server": [
                    "withSourceProcedure",
                ],
            }
        } : undefined)
        .withImports({
            imports: {
                [schemaPackage]: [
                    `$${modelName}Source`,
                    `${modelName}QuerySchema`,
                    `type I${modelName}Source`,
                    `type I${modelName}SourceSchema`,
                ],
                [prismaPackage]: [
                    "type PrismaClient",
                ],
            },
        })
        .withConsts({
            exports: {
                [`${modelName}SourceContext`]: {
                    body: `(container: IContainer) => new ServiceContext<I${modelName}Source>(container, $${modelName}Source)`,
                },
            },
        })
        .withConsts(!disabled.includes("trpc-procedure") ? {
            exports: {
                [`${modelName}SourceProcedure`]: {
                    body: `
withSourceProcedure<I${modelName}SourceSchema>({
    source: $${modelName}Source,
    schema: ${modelName}QuerySchema,
})
                    `,
                },
            },
        } : undefined)
        .withTypes({
            types: {
                "IEntity": `I${modelName}SourceSchema["Entity"]`,
                "IQuery":  `I${modelName}SourceSchema["Query"]`,
            },
        })
        .withClasses({
            exports: {
                [`${modelName}Source`]: {
                    extends:    `AbstractSource<I${modelName}SourceSchema>`,
                    implements: `I${modelName}Source`,
                    body:       `
    static inject = [
        $PrismaClient,
    ];

    constructor(
        protected prismaClient: PrismaClient,
    ) {
        super($${modelName}Source);
    }

    async runUpsert(props: ISource.IUpsert<I${modelName}SourceSchema>): Promise<IEntity> {
        return this.prisma().upsert(withUpsert(props));
    }

    async runCount(query?: IQuery): Promise<number> {
        return this.prisma().count({
            where: query?.filter,
        });
    }

    async runQuery(query?: IQuery): Promise<IEntity[]> {
        return this.prisma().findMany(withCursor({
            query,
            arg: {
                where:   query?.filter,
                orderBy: query?.sort,
            }
        }));
    }
    
    prisma() {
        return this.prismaClient.${prismaModel};
    }
                    `,
                }
            }
        })
        .saveTo({
            file: normalize(`${process.cwd()}/${file}`),
            barrel,
        });
};
