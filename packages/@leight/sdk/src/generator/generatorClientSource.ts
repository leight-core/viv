import {withSourceFile}  from "@leight/generator-server";
import {normalize}       from "node:path";
import {type IGenerator} from "../api";

export interface IGeneratorClientSourceParams {
    /**
     * Package names used for generating proper `import` statements
     */
    packages: {
        /**
         * Reference to package with generated Schemas (entity/sort/filter/...)
         */
        schema: string;
    };
    trpc?: {
        /**
         * Package (import) of client-side TRPC (should export named trpc)
         */
        package: string;
        /**
         * Part of the trpc call chain (base is `trpc`.${trpcPath}.`...rest of standard trpc router`
         */
        path: string;
    };
    /**
     * Entity name this generator works with
     */
    entity: string;
}

export const generatorClientSource: IGenerator<IGeneratorClientSourceParams> = async (
    {
        folder,
        barrel,
        params: {
                    packages,
                    entity,
                    trpc,
                }
    }) => {
    withSourceFile()
        .withImports({
            imports: {
                "@leight/source-client": [
                    "type ISourceProps",
                    "Source",
                ],
                "@leight/query-client":  [
                    "type IQueryProviderProps",
                    "QueryProvider",
                ],
                [packages.schema]:       [
                    `type I${entity}SourceSchema`,
                    `${entity}Schema`,
                ],
                "react":                 [
                    "type FC",
                ],
                "./client-context":      [
                    `${entity}Provider`,
                    `${entity}SortProvider`,
                    `use${entity}Sort`,
                ]
            }
        })
        .withImports(trpc ? {
            imports: {
                [trpc.package]: [
                    "trpc",
                ],
            },
        } : undefined)
        .withInterfaces(trpc ? {
            exports: {
                [`I${entity}SourceProps`]:        {
                    extends: [
                        {type: `ISourceProps<I${entity}SourceSchema>`},
                    ],
                },
                [`I${entity}QueryProviderProps`]: {
                    extends: [
                        {type: `IQueryProviderProps<I${entity}SourceSchema>`},
                    ],
                },
            },
        } : undefined)
        .withConsts(trpc ? {
            exports: {
                [`${entity}Source`]:        {
                    type: `FC<I${entity}SourceProps>`,
                    body: `props => {
    return <Source<I${entity}SourceSchema>
        schema={${entity}Schema}
        SourceProvider={${entity}Provider}
        useSourceQuery={trpc.${trpc.path}.source.query.useQuery}
        useSortState={use${entity}Sort}
        {...props}
    />;
}
                    `,
                },
                [`${entity}QueryProvider`]: {
                    type: `FC<I${entity}QueryProviderProps>`,
                    body: `props => {
    return <QueryProvider<I${entity}SourceSchema>
        useCountQuery={trpc.${trpc.path}.source.count.useQuery}
        SortProvider={${entity}SortProvider}
        {...props}
    />;
}
                    `,
                },
            },
        } : undefined)
        .saveTo({
            file: normalize(`${process.cwd()}/${folder}`),
            barrel,
        });
};
