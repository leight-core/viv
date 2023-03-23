import {withSourceFile}              from "@leight/generator-server";
import {normalize}                   from "node:path";
import {type IGenerator}             from "../../api";
import {type IGeneratorCommonParams} from "./generatorCommon";

export const generatorCommonEntitySchema: IGenerator<IGeneratorCommonParams> = async (
    {
        barrel,
        folder,
        params: {
                    packages,
                    entity,
                    sorts = ["id"],
                    schemaEx,
                },
    }) => {
    withSourceFile()
        .withImports({
            imports: {
                [packages.prisma]: [
                    "PrismaSchema",
                ],
                "@leight/filter":  [
                    "FilterSchema",
                ],
                "@leight/query":   [
                    "ParamsSchema",
                    "QuerySchema",
                ],
                "@leight/sort":    [
                    "SortOrderSchema",
                ],
                "@leight/source":  [
                    "WithIdentitySchema",
                ],
                "zod":             [
                    "z",
                ],
            },
        })
        .withImports(schemaEx?.entity?.package ? {
            imports: {
                [schemaEx.entity.package]: [
                    schemaEx.entity.type,
                ],
            },
        } : undefined)
        .withConsts({
            exports: {
                [`${entity}Schema`]:       {body: schemaEx?.entity ? `PrismaSchema.${entity}Schema.merge(${schemaEx.entity.type})` : `PrismaSchema.${entity}Schema`},
                [`${entity}CreateSchema`]: {body: `PrismaSchema.${entity}OptionalDefaultsSchema`},
                [`${entity}PatchSchema`]:  {body: `PrismaSchema.${entity}PartialSchema.merge(WithIdentitySchema)`},
                [`${entity}FilterSchema`]: {
                    body: `z.union([
    PrismaSchema.${entity}WhereInputSchema,
    PrismaSchema.${entity}WhereUniqueInputSchema,
    FilterSchema,
])
                    `,
                },
                [`${entity}ParamSchema`]:  {body: `ParamsSchema`},
                [`${entity}SortSchema`]:   {
                    body: `
z.object({
    ${sorts.map(sort => `${sort}: SortOrderSchema`).join(",\n\t")}
})
                    `,
                },
                [`${entity}QuerySchema`]:  {
                    body: `
QuerySchema({
    filterSchema: ${entity}FilterSchema,
    sortSchema:   ${entity}SortSchema,
    paramsSchema: ${entity}ParamSchema,
})
                    `,
                },
            },
        })
        .withTypes({
            exports: {
                [`I${entity}Schema`]:       `typeof ${entity}Schema`,
                [`I${entity}`]:             `z.infer<I${entity}Schema>`,
                [`I${entity}CreateSchema`]: `typeof ${entity}CreateSchema`,
                [`I${entity}Create`]:       `z.infer<I${entity}CreateSchema>`,
                [`I${entity}PatchSchema`]:  `typeof ${entity}PatchSchema`,
                [`I${entity}Patch`]:        `z.infer<I${entity}PatchSchema>`,
                [`I${entity}FilterSchema`]: `typeof ${entity}FilterSchema`,
                [`I${entity}Filter`]:       `z.infer<I${entity}FilterSchema>`,
                [`I${entity}ParamSchema`]:  `typeof ${entity}ParamSchema`,
                [`I${entity}Param`]:        `z.infer<I${entity}ParamSchema>`,
                [`I${entity}SortSchema`]:   `typeof ${entity}SortSchema`,
                [`I${entity}Sort`]:         `z.infer<I${entity}SortSchema>`,
                [`I${entity}QuerySchema`]:  `typeof ${entity}QuerySchema`,
                [`I${entity}Query`]:        `z.infer<I${entity}QuerySchema>`,
            },
        })
        .saveTo({
            file: normalize(`${process.cwd()}/${folder}/Schema.ts`),
            barrel,
        });
};
