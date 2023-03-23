import {withSourceFile}                    from "@leight/generator-server";
import {normalize}                         from "node:path";
import {type IGenerator}                   from "../../api";
import {type IGeneratorClientSourceParams} from "./generatorClientSource";

export const generatorClientSourceStore: IGenerator<IGeneratorClientSourceParams> = async (
    {
        folder,
        barrel,
        params: {
                    packages,
                    entity,
                }
    }) => {
    withSourceFile()
        .withHeader(`
    Source code containing improved Zustand store stuff for Source support (client-side).
        `)
        .withImports({
            imports: {
                "@leight/source-client": [
                    "createSourceContext",
                    "type ISourceProps",
                ],
                "@leight/sort-client":   [
                    "createSortContext",
                ],
                [packages.schema]:       [
                    `type I${entity}SourceSchema`,
                    `${entity}Schema`,
                    `type I${entity}SortSchema`,
                    `${entity}SortSchema`,
                ],
            },
        })
        .withTypes({
            exports: {
                [`I${entity}Source`]: `ISourceProps<I${entity}SourceSchema>`,
            },
        })
        .withConsts({
            consts:  {
                "StoreSourceContext": {
                    body: `
createSourceContext<I${entity}SourceSchema>({
    name:   "${entity}",
    schema: ${entity}Schema,
})
                    `,
                },
                "StoreSortContext":   {
                    body: `
createSortContext<I${entity}SortSchema>({
    name:   "${entity}Sort",
    schema: ${entity}SortSchema,
})
                    `,
                },
            },
            exports: {
                [`${entity}Provider`]:          {body: "StoreSourceContext.Provider"},
                [`use${entity}Source`]:         {body: "StoreSourceContext.useState"},
                [`useOptional${entity}Source`]: {body: "StoreSourceContext.useOptionalState"},
                [`use${entity}Store`]:          {body: "StoreSourceContext.useStore"},
                [`useOptional${entity}Store`]:  {body: "StoreSourceContext.useOptionalStore"},

                [`${entity}SortProvider`]:         {body: "StoreSortContext.Provider"},
                [`use${entity}Sort`]:              {body: "StoreSortContext.useState"},
                [`useOptional${entity}Sort`]:      {body: "StoreSortContext.useOptionalState"},
                [`use${entity}SortStore`]:         {body: "StoreSortContext.useStore"},
                [`useOptional${entity}SortStore`]: {body: "StoreSortContext.useOptionalStore"},
            }
        })
        .saveTo({
            file: normalize(`${process.cwd()}/${folder}/ClientStore.ts`),
            barrel,
        });
};
