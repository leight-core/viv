import {IPackageType}    from "@leight/generator";
import {withSourceFile}  from "@leight/generator-server";
import {normalize}       from "node:path";
import {type IGenerator} from "../api";

export interface IGeneratorServerSourceParams {
    /**
     * Package references (used for generating proper `import` statements
     */
    packages: {
        /**
         * Source package exporting "PrismaSchema" namespace containing "entity"
         */
        prisma: string;
        /**
         * Reference to package with generated Schemas (entity/sort/filter/...)
         */
        schema: string;
    };
    /**
     * Entity name this generator works with
     */
    entity: string;
    /**
     * Prisma repository (prismaClient.${prisma})
     */
    prisma: string;
    /**
     * Which parts of the generator are disabled (not used)
     */
    disabled?: ("trpc-procedure")[];
    /**
     * Optional extension of the source (if there are some custom methods)
     */
    sourceEx?: IPackageType;
    /**
     * File header, generated as a comment
     */
    header?: string;
}

export const generatorServerSource: IGenerator<IGeneratorServerSourceParams> = async (
    {
        barrel,
        folder,
        params: {
                    packages,
                    entity,
                    prisma,
                    disabled = [],
                    sourceEx,
                    header,
                },
    }) => {
    withSourceFile()
        .withHeader(header || `
    Source code containing implementation of Server-side Source for ${entity}, TRPC router part (if no disabled) and
    some other cool stuff.
        `)
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
        .withImports(sourceEx?.package ? {
            imports: {
                [sourceEx.package]: [sourceEx.type],
            },
        } : undefined)
        .withImports(!disabled.includes("trpc-procedure") ? {
            imports: {
                "@leight/trpc-source-server": [
                    "withSourceProcedure",
                ],
            }
        } : undefined)
        .withImports({
            imports: {
                [packages.schema]: [
                    `$${entity}Source`,
                    `${entity}QuerySchema`,
                    `type I${entity}Source`,
                    `type I${entity}SourceSchema`,
                ],
            },
        })
        .withImports({
            imports: {
                [packages.prisma]: [
                    "type PrismaClient",
                ],
            }
        })
        .withConsts({
            exports: {
                [`${entity}SourceContext`]: {
                    body: `(container: IContainer) => new ServiceContext<I${entity}Source>(container, $${entity}Source)`,
                },
            },
        })
        .withConsts(!disabled.includes("trpc-procedure") ? {
            exports: {
                [`${entity}SourceProcedure`]: {
                    body: `
withSourceProcedure<I${entity}SourceSchema>({
    source: $${entity}Source,
    schema: ${entity}QuerySchema,
})
                    `,
                },
            },
        } : undefined)
        .withTypes({
            types: {
                "IEntity": `I${entity}SourceSchema["Entity"]`,
                "IQuery":  `I${entity}SourceSchema["Query"]`,
            },
        })
        .withClasses({
            exports: {
                [`${entity}BaseSource`]: {
                    extends: `AbstractSource<I${entity}SourceSchema>`,
                    body:    `
    static inject = [
        $PrismaClient,
    ];

    constructor(
        protected prismaClient: PrismaClient,
    ) {
        super($${entity}Source);
    }

    async runUpsert(props: ISource.IUpsert<I${entity}SourceSchema>): Promise<IEntity> {
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
        return this.prismaClient.${prisma};
    }
                    `,
                },
                [`${entity}Source`]:     {
                    extends:    sourceEx?.type ? sourceEx.type : `${entity}BaseSource`,
                    implements: `I${entity}Source`,
                },
            },
        })
        .saveTo({
            file: normalize(`${process.cwd()}/${folder}`),
            barrel,
        });
};
