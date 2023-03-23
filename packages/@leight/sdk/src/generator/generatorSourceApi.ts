import {IPackageType}    from "@leight/generator";
import {withSourceFile}  from "@leight/generator-server";
import {normalize}       from "node:path";
import {type IGenerator} from "../api";

export interface IGeneratorSourceApiParams {
    /**
     * Entity name this generator works with
     */
    entity: string;
    /**
     * Package containing (generated) model interfaces (CreateSchema, FilterSchema, ...); maybe be written by hand
     *
     * Defaults to './entity-schema'
     */
    entitySchemaPackage?: string;
    /**
     * Another extension of generated ISource
     *
     * IFooSource extends ISource, sourceEx[]
     */
    sourceEx?: {
        /**
         * Specify extensions of the ISource interface
         */
        extends?: IPackageType[];
    };
}

export const generatorSourceApi: IGenerator<IGeneratorSourceApiParams> = async (
    {
        packageName,
        folder,
        barrel,
        params: {
                    entity,
                    entitySchemaPackage = "./entity-schema",
                    sourceEx,
                }
    }) => {
    withSourceFile()
        .withHeader(`
    Source code of the common stuff for ${entity} which could be shared between server and client side.
        `)
        .withImports({
            imports: {
                "@leight/source":      [
                    "type ISource",
                    "type IWithIdentity",
                    "type ISourceSchema"
                ],
                "@leight/react-query": [
                    "type IUseQuery",
                ],
                [entitySchemaPackage]: [
                    `type I${entity}CreateSchema`,
                    `type I${entity}FilterSchema`,
                    `type I${entity}ParamSchema`,
                    `type I${entity}PatchSchema`,
                    `type I${entity}Schema`,
                    `type I${entity}SortSchema`,
                ]
            }
        })
        .withImports(sourceEx?.extends ? {
            imports: sourceEx.extends
                         .filter(((item): item is Required<IPackageType> => Boolean(item.package)))
                         .reduce((prev, {type, package: $package}) => ({
                             ...prev,
                             [$package]: [
                                 `type ${type}`,
                                 ...(prev[$package] || [])
                             ],
                         }), {} as Record<string, any>),
        } : undefined)
        .withTypes({
            exports: {
                [`IUse${entity}FetchQuery`]: `IUseQuery<I${entity}SourceSchema["Query"], I${entity}SourceSchema["Entity"]>`,
                [`IUse${entity}FindQuery`]:  `IUseQuery<IWithIdentity, I${entity}SourceSchema["Entity"]>`,
            }
        })
        .withInterfaces({
            exports: {
                [`I${entity}Source`]:       {
                    extends: [
                                 {type: `ISource<I${entity}SourceSchema>`},
                             ].concat(sourceEx?.extends || []),
                },
                [`I${entity}SourceSchema`]: {
                    extends: [
                        {
                            type: `
ISourceSchema<
    I${entity}Schema,
    I${entity}CreateSchema,
    I${entity}PatchSchema,
    I${entity}FilterSchema,
    I${entity}SortSchema,
    I${entity}ParamSchema
 >
                            `,
                        },
                    ],
                }
            }
        })
        .withConsts({
            exports: {
                [`$${entity}Source`]: {body: `Symbol.for("${packageName}/I${entity}Source")`},
            }
        })
        .saveTo({
            file: normalize(`${process.cwd()}/${folder}`),
            barrel,
        });
};
