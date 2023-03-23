import {IPackageType}    from "@leight/generator";
import {withSourceFile}  from "@leight/generator-server";
import {normalize}       from "node:path";
import {type IGenerator} from "../api";

export interface IGeneratorSourceApiParams {
    /**
     * Model name being exported
     */
    modelName: string;
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
        extends?: IPackageType[];
    };
}

export const generatorSourceApi: IGenerator<IGeneratorSourceApiParams> = async (
    {
        packageName,
        file,
        barrel,
        params: {
                    modelName,
                    entitySchemaPackage = "./entity-schema",
                    sourceEx,
                }
    }) => {
    withSourceFile()
        .withHeader(`
    Source code of the common stuff for ${modelName} which could be shared between server and client side.
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
                    `type I${modelName}CreateSchema`,
                    `type I${modelName}FilterSchema`,
                    `type I${modelName}ParamSchema`,
                    `type I${modelName}PatchSchema`,
                    `type I${modelName}Schema`,
                    `type I${modelName}SortSchema`,
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
                [`IUse${modelName}FetchQuery`]: `IUseQuery<I${modelName}SourceSchema["Query"], I${modelName}SourceSchema["Entity"]>`,
                [`IUse${modelName}FindQuery`]:  `IUseQuery<IWithIdentity, I${modelName}SourceSchema["Entity"]>`,
            }
        })
        .withInterfaces({
            exports: {
                [`I${modelName}Source`]:       {
                    extends: [
                                 {type: `ISource<I${modelName}SourceSchema>`},
                             ].concat(sourceEx?.extends || []),
                },
                [`I${modelName}SourceSchema`]: {
                    extends: [
                        {
                            type: `
ISourceSchema<
    I${modelName}Schema,
    I${modelName}CreateSchema,
    I${modelName}PatchSchema,
    I${modelName}FilterSchema,
    I${modelName}SortSchema,
    I${modelName}ParamSchema
 >
                            `,
                        },
                    ],
                }
            }
        })
        .withConsts({
            exports: {
                [`$${modelName}Source`]: {body: `Symbol.for("${packageName}/I${modelName}Source")`},
            }
        })
        .saveTo({
            file: normalize(`${process.cwd()}/${file}`),
            barrel,
        });
};
