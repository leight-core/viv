import {withSourceFile}  from "@leight/generator-server";
import {normalize}       from "node:path";
import {type IGenerator} from "../../api";

export interface IGeneratorClientSourceTableParams {
    entities: IGeneratorClientSourceTableParams.IEntity[];
}

export namespace IGeneratorClientSourceTableParams {
    export interface IEntity {
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
         * Package used to import all schema-related types (ISource implementation, IWhere and so on, can be generated by @leight).
         */
        schema: string;
    }
}

export const generatorClientSourceTable: IGenerator<IGeneratorClientSourceTableParams> = async (
    {
        folder,
        barrel,
        params: {entities}
    }) => {
    const file = withSourceFile();

    entities.forEach(({name, packages}) => {
        file.withImports({
                imports: {
                    "@leight/table-client":   [
                        "SourceTable",
                        "type ISourceTableInternalProps",
                    ],
                    [packages.schema]:        [
                        `type I${name}SourceSchema`,
                        `${name}SourceSchema`,
                    ],
                    "./ClientStore":          [
                        `${name}SourceStore`,
                    ],
                    "./ClientSourceProvider": [
                        `${name}Source`,
                    ],
                }
            })
            .withInterfaces({
                exports: {
                    [`I${name}SourceTableInternalProps<TColumnKeys extends string>`]: {
                        extends: [
                            {type: `Omit<ISourceTableInternalProps<I${name}SourceSchema, TColumnKeys>, "SourceStore" | "schema">`},
                        ],
                    },
                    [`I${name}SourceTableProps<TColumnKeys extends string>`]:         {
                        extends: [
                            {type: `Omit<I${name}SourceTableInternalProps<TColumnKeys>, "columns" | "withTranslation">`},
                        ],
                    },
                },
            })
            .withConsts({
                exports: {
                    [`${name}SourceTable`]: {
                        comment: `
/**
 * Base implementation of a table providing ${name} data already connected to a source; just extend this table with
 * columns and other props as you wish.
 */
                        `,
                        body:    `<TColumnKeys extends string>(props: I${name}SourceTableInternalProps<TColumnKeys>) => {
    return <${name}Source>
        <SourceTable
            SourceStore={${name}SourceStore}
            schema={${name}SourceSchema['EntitySchema']}
            {...props}
        />
    </${name}Source>;
}
                    `,
                    },
                },
            });
    });

    file.saveTo({
        file: normalize(`${process.cwd()}/${folder}/ClientSourceTable.tsx`),
        barrel,
    });
};
